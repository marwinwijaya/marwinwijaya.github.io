# Project Guide - marwinwijaya.github.io
> Onboarded via vibe-init on 2026-05-26.
> Existing static portfolio project. Read `vibe/CODEBASE.md` before making changes.

## Project Purpose

Personal CV and portfolio website for Muhamad Arwin Wijaya, now being prepared for stronger positioning as AI Engineer Lead and DevOps Lead.

## Startup Checklist

1. Read `vibe/CODEBASE.md`.
2. Read `vibe/ARCHITECTURE.md`.
3. Read `vibe/SPEC_INDEX.md`.
4. Read `vibe/TASKS.md`.
5. If working on an active feature, read its `FEATURE_SPEC.md`, `FEATURE_PLAN.md`, and `FEATURE_TASKS.md`.

## Commands

```bash
npm install
npm run build
npm start
python -m http.server 8000
```

Notes:
- `npm run build` works after dependencies are installed, but Sass emits deprecation warnings.
- `npm start` needs verification because `server.js` currently serves `public/`, which was not observed.
- `npm test` is a placeholder and currently fails.

## Architecture Boundaries

- Main public page is `index.html`.
- Main editable behavior source is `js/custom.js`.
- Main intended style source is `scss/style.scss`, but it currently drifts from `css/style.css`.
- Do not edit `js/vendor/` or third-party/template assets unless explicitly scoped.
- Treat `portofolio/web/*` as embedded portfolio demos unless the task names them.
- Preserve GitHub Pages compatibility: root-relative paths should be reviewed carefully.
- Do not remove legal pages, CV file, sitemap, robots, or service worker without an explicit decision.

## Current Known Risks

- Navbar links for Work Experience and Organization target missing IDs.
- Production CSS contains rules not present in SCSS; rebuilding can remove current styling.
- Local Express server static root is likely wrong.
- No automated tests or CI were observed.

## Active Feature

### Homepage Premium Portfolio Refinement
> Folder: `vibe/features/2026-05-26-homepage-premium-portfolio-refinement/` | Added: 2026-05-26

Feature summary: Refine homepage into a premium personal portfolio for AI Engineer Lead and DevOps Lead positioning.

Files in scope:
- `index.html`
- `scss/style.scss`
- `css/style.css`
- `js/custom.js` and `js/custom.min.js` if behavior changes
- `sw.js` if cache version/assets need update
- `vibe/CODEBASE.md`
- `vibe/TASKS.md`

Files out of scope:
- `portofolio/web/**`
- `fonts/icomoon/**`
- `js/vendor/**`
- Legal pages unless directly needed
- `cv/CV-Muhamad_Arwin_Wijaya.pdf`

Boundaries:
- Reconcile SCSS/CSS drift before major visual edits.
- Keep GitHub Pages root deployment safe.
- Preserve CV download, legal pages, and existing public asset paths.
- Do not add a frontend framework for this feature.

Session startup for this feature:
1. Read this file.
2. Read `vibe/CODEBASE.md`.
3. Read `vibe/ARCHITECTURE.md`.
4. Read `vibe/SPEC_INDEX.md`.
5. Read `vibe/TASKS.md`.
6. Read `vibe/features/2026-05-26-homepage-premium-portfolio-refinement/FEATURE_TASKS.md`.

## Session Completion

Before finishing code changes:
- Run `npm run build` when touching SCSS or JS build sources.
- If build artifacts change unexpectedly, inspect diffs before keeping them.
- Update `vibe/CODEBASE.md` if structure, routes, commands, or patterns change.
- Update `vibe/TASKS.md` for tracked feature progress.
