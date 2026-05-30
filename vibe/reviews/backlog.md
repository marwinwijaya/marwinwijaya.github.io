# Review Backlog
> Started on 2026-05-26 via vibe-init.
> First baseline review: 2026-05-26.

## Outstanding P1 Issues

| ID | Finding | File | Line | Source |
|----|---------|------|------|--------|
| P1-001 | Google Fonts loaded twice (preload + stylesheet, duplicate requests) | index.html | 21-25, 42-43 | init-review |
| P1-002 | Duplicate footer copyright line visible in production | index.html | 917-918 | init-review |
| P1-003 | No automated test suite — `npm test` is a placeholder | package.json | test script | init-review |

## Outstanding P2 Issues

| ID | Finding | File | Line | Source |
|----|---------|------|------|--------|
| P2-001 | `console.log('nice')` debug code in production JS | js/custom.js | 51 | init-review |
| P2-002 | server.js serves missing `public/` directory | server.js | 7 | init-review |
| P2-003 | js/custom.js has 9 concerns in one IIFE (451 lines) | js/custom.js | 1-451 | init-review |
| P2-004 | Minified output may be stale vs source | js/custom.min.js | — | init-review |

## Known Init Findings

- `server.js` points to missing `public/` directory.
- Navbar has section anchors that do not match observed section IDs.
- `scss/style.scss` and `css/style.css` are out of sync.
- `npm test` is a placeholder that fails.
- `npm audit` reports 1 moderate and 3 high vulnerabilities after install.

## Resolved Issues

(none yet)
