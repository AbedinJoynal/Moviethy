# Moviethy

Moviethy is a responsive TV show discovery app built with React, Vite, and the TVMaze API. Browse the show collection, search by title, and open a show to view its summary, genres, rating, and premiere date.

## Run locally

1. Install Node.js (version 20.19+ or 22.12+).
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open the local URL printed by Vite.

## Available scripts

- `npm run dev` — start the development server.
- `npm run lint` — check the project with ESLint.
- `npm run build` — create a production build in `dist`.
- `npm run preview` — preview the production build locally.

## Data source

Show data comes from the public [TVMaze API](https://www.tvmaze.com/api):

- `GET https://api.tvmaze.com/shows` for the collection.
- `GET https://api.tvmaze.com/search/shows?q=:query` for title search.

The API provides TV shows rather than movies; the app uses “shows” to describe its catalog.

## Deployment

Build the project with `npm run build`, then deploy the generated `dist` directory to a static hosting provider such as Vercel or Netlify. Configure the host to serve `index.html` for app routes so paths such as `/shows` work on refresh.
