# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static personal CV and portfolio website for Muhamad Arwin Wijaya, deployed to GitHub Pages at `marwinwijaya.github.io`. Hand-authored HTML/CSS/JS with Bootstrap, jQuery, Sass build pipeline, and a service worker for caching.

## Commands

```bash
npm install                  # install deps (express, sass, terser)
npm run build                # compile scss/style.scss → css/style.css + css/style.min.css, minify js/custom.js → js/custom.min.js
npm run build:css            # compile scss only
npm run build:css:min        # compile scss compressed only
npm run build:js             # terser js/custom.js only
npm start                    # Express server on port 8080 (serves public/ — likely misconfigured, see risks)
python -m http.server 8000   # simple static preview from repo root (recommended for quick preview)
```

`npm test` is a placeholder — exits with failure.

## Build Pipeline

- **CSS**: `scss/style.scss` → compiled to `css/style.css` and `css/style.min.css` via Sass.
- **JS**: `js/custom.js` → minified to `js/custom.min.js` via Terser.
- `npm run build` runs all three: `build:css`, `build:css:min`, `build:js`.

### SCSS/CSS Drift Risk

Production `css/style.css` currently contains rules **not present** in `scss/style.scss`. Running `npm run build` will overwrite `css/style.css` with only what SCSS produces, **remaking existing production-only styling**. Before running a full build:
1. Compare `scss/style.scss` against `css/style.css` to identify what SCSS is missing.
2. Merge missing rules into SCSS source first, or accept the loss.

This is the #1 risk for any styling work.

## Architecture

### File Organization

- `index.html` — single-page portfolio (hero, about, services, resume, projects, org experience, certificates, contact)
- `css/style.css` — production stylesheet (compiled from SCSS + some production-only rules)
- `css/legal-pages.css` — standalone CSS for legal pages, not generated from SCSS
- `js/custom.js` — main jQuery behavior (smooth scroll, waypoints, Isotope certificate gallery, navbar, list toggles)
- `js/site.js` — service worker registration + current year injection
- `js/vendor/` — third-party libraries (jQuery, Bootstrap, Popper) — do not edit
- `scss/` — Sass source including Bootstrap partials and `scss/style.scss`
- `sw.js` — service worker (network-first for HTML, cache-first for assets)
- `portofolio/web/` — embedded independent static demo sites (agrivania, riwa-arsa) — treat as read-only unless task-scoped

### Routes

All root HTML files are public routes on GitHub Pages:
`/`, `/404.html`, `/privacy-policy.html`, `/terms-and-conditions.html`, `/cookie-policy.html`, `/security-statement.html`, `/disclaimer.html`

### HTML Section IDs

Sections in `index.html`: `#section-home`, `#section-about`, `#section-services`, `#section-resume`, `#section-projects`, `#section-oe`, `#section-certificate`, `#section-contact`.

**Known drift**: Navbar links target `#section-work-experience` and `#section-organization`, but actual section IDs are `#section-resume` and `#section-oe`. Fix these before relying on anchor navigation.

### Service Worker

`sw.js` caches the app shell. Bump `CACHE_VERSION` when adding/removing cached assets. Only caches same-origin GET requests.

### Deployment

GitHub Pages serves from the repo root on the default branch. No GitHub Actions workflow is configured. No build step runs on deploy — `css/` and `js/custom.min.js` must be committed.

## Boundaries

- Do not edit `js/vendor/` or third-party/template assets unless explicitly scoped.
- Preserve GitHub Pages root compatibility — root-relative paths must be reviewed carefully.
- Do not remove legal pages, CV file, `sitemap.xml`, `robots.txt`, or `sw.js` without explicit decision.
- Do not add a frontend framework.

## Session Completion

When finishing code changes:
- Run `npm run build` when touching SCSS or JS build sources.
- If build artifacts change unexpectedly, inspect diffs before keeping them.
- Update `vibe/CODEBASE.md` if structure, routes, commands, or patterns change.
