export default {
	async fetch(request, env, ctx) {
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		};

		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		const url = new URL(request.url);

		try {
			// RATINGS
			if (url.pathname === '/rating' || url.searchParams.has('date')) {
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

				if (request.method === 'POST') {
					const body = await request.json();
					const { date, rating } = body;

					if (!date || !rating || rating < 1 || rating > 5) {
						return new Response(
							JSON.stringify({ error: 'Invalid date or rating (must be 1-5)' }),
							{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
						);
					}

					const userIp = request.headers.get('cf-connecting-ip') || 'unknown';
					const timestamp = new Date().toISOString();

					const { results: existingVote } = await env.votes_db.prepare(
						`SELECT id FROM ratings WHERE date = ? AND user_ip = ?`
					).bind(date, userIp).all();

					if (existingVote && existingVote.length > 0) {
						await env.votes_db.prepare(
							`UPDATE ratings SET rating = ?, created_at = ? WHERE date = ? AND user_ip = ?`
						).bind(rating, timestamp, date, userIp).run();
					} else {
						await env.votes_db.prepare(
							`INSERT INTO ratings (date, rating, user_ip, created_at) VALUES (?, ?, ?, ?)`
						).bind(date, rating, userIp, timestamp).run();
					}

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
			}

			// COMMENTS
			if (url.pathname === '/comment' || url.searchParams.has('joke_date')) {
				if (request.method === 'GET') {
					const jokeDate = url.searchParams.get('joke_date');
					if (!jokeDate) {
						return new Response(
							JSON.stringify({ error: 'Missing joke_date parameter' }),
							{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
						);
					}

					const { results } = await env.votes_db.prepare(
						`SELECT name, comment, created_at FROM comments WHERE joke_date = ? ORDER BY created_at ASC`
					).bind(jokeDate).all();


					return new Response(
						JSON.stringify({
							joke_date: jokeDate,
							comments: results || []
						}),
						{ status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
					);
				}

				if (request.method === 'POST') {
					const body = await request.json();
					const { joke_date, name, comment } = body;

					if (!joke_date || !name || !comment) {
						return new Response(
							JSON.stringify({ error: 'Missing required fields' }),
							{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
						);
					}

					if (name.length > 100) {
						return new Response(
							JSON.stringify({ error: 'Name too long' }),
							{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
						);
					}

					if (comment.length > 3000) {
						return new Response(
							JSON.stringify({ error: 'Comment too long' }),
							{ status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
						);
					}

					await env.votes_db.prepare(
						`INSERT INTO comments (joke_date, name, comment) VALUES (?, ?, ?)`
					).bind(joke_date, name, comment).run();

					return new Response(
						JSON.stringify({ success: true }),
						{ status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
					);
				}
			}

			return new Response(
				JSON.stringify({ error: 'Method not allowed' }),
				{ status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
			);

		} catch (error) {
			console.error('Error:', error);
			return new Response(
				JSON.stringify({
					error: 'Internal server error',
					details: error.message,
					stack: error.stack
				}),
				{ status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
			);
		}
	}
};
