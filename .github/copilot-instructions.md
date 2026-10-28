# Copilot instructions

## Build, lint, and test

Use Node.js 24 LTS. Install dependencies with `npm install`.

- `npm run dev` starts the Vite development server.
- `npm run lint` runs Oxlint across the project. To lint one file, use `npm run lint -- src/App.jsx`.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the production build locally.
- No test runner or test script is configured, so there is currently no command for running a single test.

## Architecture

This is a React 19 single-page introduction site built with Vite. `src/main.jsx` mounts `App` in `StrictMode`; `src/App.jsx` owns the page content and navigation. The page is one document with anchor links to the introduction, activities, and goals sections; it does not use a routing library or separate route views. Profile content is rendered from the `profileSections` data, while the activity section has a dedicated placeholder for the owner's school work and presentations.

Global tokens, typography, and accessibility defaults live in `src/index.css`; page and responsive styles live in `src/App.css`. `public/` is for static assets. The README identifies the about-page copy and project descriptions as starter examples intended to be replaced with the portfolio owner's real content.

## Project conventions

- Keep visitor-facing copy in Korean, consistent with the existing UI and README.
- Keep profile section content in the shared `profileSections` data and preserve its relationship to the rendered profile cards.
- Keep the in-page navigation anchors aligned with the section IDs in `src/App.jsx` (`home`, `about`, `activities`, and `goals`).
- Preserve semantic section headings, the skip link, and keyboard focus visibility. Global focus-visible and reduced-motion behavior is in `src/index.css`.
- Keep shared site-wide styles and color tokens in `src/index.css`; page layout and responsive rules belong in `src/App.css`. The current responsive breakpoints are 760px and 420px.
- Only include biographical details supplied by the site owner. Leave placeholders for unspecified activity/project details and do not add personal contact details or birth date.
