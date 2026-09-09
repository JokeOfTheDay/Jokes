# Cloudflare Worker Setup for Joke Ratings

This guide will help you deploy the ratings API to Cloudflare Workers.

## Prerequisites
- Cloudflare account
- Cloudflare D1 (Database) - using existing `votes_db`

## Step 1: Create the Ratings Table in votes_db

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **D1**
3. Click on your **votes_db** database
4. Go to the **Console** tab
5. Paste and run this SQL:

```sql
CREATE TABLE IF NOT EXISTS ratings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  user_ip TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_ratings_date ON ratings(date);
```

## Step 2: Create the Worker

1. Go to **Workers & Pages** → **Workers**
2. Click **Create application**
3. Choose **Write your own**
4. Name it `joke-ratings`
5. Click **Create**
6. In the **Editor** tab, paste the code from `cloudflare-worker.js`

## Step 3: Connect votes_db to Worker

1. In your Worker, go to **Settings** tab
2. Scroll to **Bindings**
3. Click **Add binding**
4. Choose **D1 Database**
5. Variable name: `votes_db`
6. Database: select `votes_db`
7. Save and deploy

## Step 4: Deploy

Click **Save and deploy**

Your Worker URL will be something like:
`https://joke-ratings.[your-account].workers.dev`

If it's different from `https://joke-ratings.maartenvanbosbeke.workers.dev`, update the `RATING_API` constant in `jokes.js`.

## API Endpoints

### GET - Fetch Average Rating
```
GET /api/ratings?date=2026-09-09
```

Response:
```json
{
  "date": "2026-09-09",
  "average": 3.5,
  "count": 2
}
```

### POST - Submit a Rating
```
POST /api/ratings
Content-Type: application/json

{
  "date": "2026-09-09",
  "rating": 4
}
```

Response:
```json
{
  "success": true,
  "date": "2026-09-09",
  "average": 3.5,
  "count": 2
}
```

## Testing

Once deployed, you can test with curl:

```bash
# Get ratings
curl "https://joke-ratings.YOUR-ACCOUNT.workers.dev?date=2026-09-09"

# Submit a rating
curl -X POST https://joke-ratings.YOUR-ACCOUNT.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"date":"2026-09-09","rating":4}'
```

## Notes

- Ratings are stored with the user's IP for basic duplicate tracking
- The average calculation is done server-side for accuracy
- All requests include CORS headers for cross-origin access
- The database automatically calculates the average and count per joke date
