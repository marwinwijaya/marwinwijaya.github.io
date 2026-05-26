# FEATURE_PLAN - Homepage Premium Portfolio Refinement

## Impact Map

Files expected to modify:
- `index.html`
- `scss/style.scss`
- `css/style.css`
- `js/custom.js` if project filtering or anchor-safe behavior is needed
- `js/custom.min.js` if `js/custom.js` changes
- `sw.js` if cache version/assets need update
- `vibe/CODEBASE.md`
- `vibe/TASKS.md`

Files explicitly out of scope:
- `portofolio/web/**`
- `fonts/icomoon/**`
- `js/vendor/**`
- Legal HTML pages unless metadata/navigation requires a shared footer correction
- `cv/CV-Muhamad_Arwin_Wijaya.pdf`

## Implementation Strategy

1. Reconcile CSS source drift before visual edits. Move production-only homepage rules from `css/style.css` into `scss/style.scss` or intentionally preserve them in the new SCSS structure.
2. Fix navbar anchor mismatch while refining nav labels.
3. Refactor homepage content in place, keeping static HTML and Bootstrap compatibility.
4. Add premium visual system with CSS variables or clearly grouped SCSS sections.
5. Add portfolio card structure and optional filter behavior with small vanilla/jQuery code.
6. Rebuild CSS/JS artifacts and inspect diffs before keeping generated files.
7. Run local static preview and verify responsive breakpoints.

## Data / Content Plan

No database changes. Content remains static. If content duplication becomes hard to manage, add a small clearly scoped data block in `js/custom.js` only for portfolio filtering behavior, not full page rendering.

## Frontend Changes

- Hero copy and CTAs per spec.
- About narrative rewritten for AI/DevOps leadership positioning.
- New Expertise section or repurpose Services into Expertise.
- Portfolio section expanded from 3 crop analytics items into requested project card grid.
- Experience section content adjusted to emphasize AI Engineer Lead, DevOps Lead, ownership, and impact.
- Contact section converted into cleaner action-focused layout.
- SEO metadata updated for AI Engineer Lead and DevOps Lead positioning.

## Testing Strategy

- `npm run build`
- Manual browser check via `python -m http.server 8000` or fixed `npm start`.
- Anchor validation: every navbar hash points to an existing element ID.
- Asset validation: referenced CV, CSS, JS, and image paths exist.
- Responsive visual check at mobile, tablet, desktop widths.

## Rollback Plan

- Revert changes to `index.html`, `scss/style.scss`, generated CSS/JS, and `sw.js` if the new UI causes regressions.
- Keep onboarding docs unless the feature kit itself is abandoned.

## CODEBASE.md Updates Required

- Update section map if IDs or sections change.
- Document new project filter behavior if added.
- Document any new CSS architecture or design tokens.
- Update known risks once SCSS/CSS drift and navbar anchors are fixed.
