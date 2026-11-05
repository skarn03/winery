# United Winery frontend

A React and Vite website for United Winery with home, collection, individual wine, story, winery, journal, gallery, and contact pages.

## Run locally

```sh
npm ci
npm run dev
```

Build for production with `npm run build`. The output is in `build/`.

## Content and assets

- The page content and product catalog are in `src/App.jsx`.
- The design system and responsive styles are in `src/App.css`, `src/Expanded.css`, and `src/Interactive.css`.
- Optimized supplied photography is in `public/images/`. The gallery also uses this repository's original winery tank photograph.
- Three photographs from this repository's original gallery are optimized in `public/images/` and used in the new collection and gallery layouts.
- The Story page carries forward this repository's founding details, Godawari location, and listed Birtamod distributors. Confirm current availability with the winery.
- Transparent bottle PNGs from the original site power the in view bottle spotlight and the bottle compositions on the home and collection pages.
- A scroll guided Rising Royals sequence on the home page moves through Sweet Red, Sweet White, and Rosé. The rosé bottle cutout was derived from the supplied product poster. Transparent wine drop PNGs add subtle motion to several sections.
- The home page includes an occasion selector; the winery has an image explorer; the gallery lightbox supports previous/next buttons and arrow keys. The wine coloured drip at the right tracks page scroll progress.
- Wine descriptions are proposed marketing copy from the supplied product document. Confirm specifications and tasting notes with the winery before publishing. Godawari Sweet White currently has a designed image placeholder because no matching photo was supplied.
- The product labelled “Marijuana” in the source document is omitted until its category and required disclosures are confirmed.

The contact form opens a prefilled email draft to `info@unitedwinery.com`; it does not submit to a server.
