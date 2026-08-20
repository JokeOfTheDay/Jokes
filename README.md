# Daily Jokes

A simple, free daily-joke website designed for GitHub Pages.

## Files

- `index.html` — the website
- `style.css` — the design
- `jokes.js` — logic for the page
- `jokes-data.js` — the actual jokes

## Adding a joke

Open `jokes-data` and add an entry like:

```js
{
    date: "2026-08-20",
    setup: "Why did the frog become an alcoholic?",
    punchline: "He really loves hops."
}
```

The date must use `YYYY-MM-DD`.

## Publishing with GitHub Pages

1. Create a GitHub repository named `YOURUSERNAME.github.io`.
2. Upload all files to the repository.
3. In the repository, open **Settings → Pages**.
4. Under the publishing/source options, select the repository's main branch (usually `main`) and the root folder.
5. Save the Pages settings.
6. Visit `https://JokeOfTheDay.github.io/Jokes`.

## Important

The jokes are stored directly in `jokes-data.js`, so there is no database and no server to maintain. Every time you edit the file on GitHub, the published site will update after GitHub Pages rebuilds it.
