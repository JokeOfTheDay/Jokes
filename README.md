# Daily Jokes

A simple, free daily-joke website designed for GitHub Pages.

## Files

- `index.html` — the website
- `style.css` — the design
- `jokes.js` — your daily jokes

## Adding a joke

Open `jokes.js` and add an entry like:

```js
{
  date: "2026-08-24",
  text: "Your joke goes here."
}
```

The date must use `YYYY-MM-DD`.

## Publishing with GitHub Pages

1. Create a GitHub repository named `YOURUSERNAME.github.io`.
2. Upload all three website files (`index.html`, `style.css`, `jokes.js`) to the repository.
3. In the repository, open **Settings → Pages**.
4. Under the publishing/source options, select the repository's main branch (usually `main`) and the root folder.
5. Save the Pages settings.
6. Visit `https://YOURUSERNAME.github.io`.

Replace `YOURUSERNAME` with your GitHub username.

## Important

The jokes are stored directly in `jokes.js`, so there is no database and no server to maintain. Every time you edit the file on GitHub, the published site will update after GitHub Pages rebuilds it.
