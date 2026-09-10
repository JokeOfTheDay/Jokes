/**
 * Cloudflare Worker for handling joke ratings
 * Deploy this to: https://joke-ratings.maartenvanbosbeke.workers.dev
 * 
 * Requires:
 * - Cloudflare D1 database named "votes_db" with table "ratings"
 * - CORS configured for your joke site domain
 */

export default {
	async fetch(request, env, ctx) {
		// Enable CORS
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		};

		// Handle CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		const url = new URL(request.url);

		try {
			// GET: Fetch average rating for a joke
			if (request.method === 'GET') {
				const jokeDate = url.searchParams.get('date');

				if (!jokeDate) {
					return new Response(
						JSON.stringify({ error: 'Missing date parameter' }),
						{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
					);
				}

				const { results } = await env.votes_db.prepare(
					`SELECT AVG(rating) as average, COUNT(*) as count FROM ratings WHERE date = ?`
				).bind(jokeDate).all();

				const data = results[0] || { average: null, count: 0 };

				return new Response(
					JSON.stringify({
						date: jokeDate,
						average: data.average ? parseFloat(data.average) : null,
						count: data.count || 0
					}),
					{ headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
				);
			}

			// POST: Submit a new rating or update existing
			if (request.method === 'POST') {
				const body = await request.json();
				const { date, rating } = body;

				if (!date || !rating || rating < 1 || rating > 5) {
					return new Response(
						JSON.stringify({ error: 'Invalid date or rating (must be 1-5)' }),
						{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
					);
				}

				// Get user IP for identifying users
				const userIp = request.headers.get('cf-connecting-ip') || 'unknown';
				const timestamp = new Date().toISOString();

				// Check if this user already voted on this joke
				const { results: existingVote } = await env.votes_db.prepare(
					`SELECT id FROM ratings WHERE date = ? AND user_ip = ?`
				).bind(date, userIp).all();

				if (existingVote && existingVote.length > 0) {
					// Update existing vote
					await env.votes_db.prepare(
						`UPDATE ratings SET rating = ?, created_at = ? WHERE date = ? AND user_ip = ?`
					).bind(rating, timestamp, date, userIp).run();
				} else {
					// Insert new rating
					await env.votes_db.prepare(
						`INSERT INTO ratings (date, rating, user_ip, created_at) VALUES (?, ?, ?, ?)`
					).bind(date, rating, userIp, timestamp).run();
				}

				// Fetch updated average
				const { results } = await env.votes_db.prepare(
					`SELECT AVG(rating) as average, COUNT(*) as count FROM ratings WHERE date = ?`
				).bind(date).all();

				const data = results[0] || { average: null, count: 0 };

				return new Response(
					JSON.stringify({
						success: true,
						date: date,
						average: data.average ? parseFloat(data.average) : null,
						count: data.count || 0
					}),
					{ headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
				);
			}

			return new Response(
				JSON.stringify({ error: 'Method not allowed' }),
				{ status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
			);

		} catch (error) {
			console.error('Error:', error);
			return new Response(
				JSON.stringify({ error: 'Internal server error', details: error.message }),
				{ status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
			);
		}
	},
};