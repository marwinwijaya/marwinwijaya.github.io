# SPEC REVIEW - marwinwijaya.github.io - add-feature

Documents audited:
- `vibe/SPEC.md`
- `vibe/ARCHITECTURE.md`
- `vibe/features/2026-05-26-homepage-premium-portfolio-refinement/FEATURE_SPEC.md`
- `vibe/features/2026-05-26-homepage-premium-portfolio-refinement/FEATURE_PLAN.md`
- `vibe/features/2026-05-26-homepage-premium-portfolio-refinement/FEATURE_TASKS.md`

Documents missing:
- `BRIEF.md`
- `AGENT_ARCH.md`
- `vibe/PLAN.md` (expected for greenfield projects, intentionally absent after retrofit init)

## P0 - Critical

None. No build-blocking spec gaps found.

## P1 - Warnings

### P1-001 - `vibe/SPEC.md` - provisional source of truth

Issue: `vibe/SPEC.md` is explicitly provisional and generated from observed behavior, not approved product intent.

Why it matters: Review agents may treat current behavior as intended behavior, including existing issues such as navbar anchor drift and local server mismatch.

Fix: Human should verify `vibe/SPEC.md`, remove the provisional banner, and update "Last verified" when accepted.

### P1-002 - `vibe/ARCHITECTURE.md` - boundaries are split across docs

Issue: Concrete "always / ask first / never" boundaries are primarily in `CLAUDE.md`, while `vibe/ARCHITECTURE.md` describes risks and patterns.

Why it matters: Agents that read only architecture may miss operational boundaries for editing generated CSS, vendor files, and GitHub Pages paths.

Fix: When the first feature task starts, either keep `CLAUDE.md` as the active boundary source or mirror the most important boundaries into `vibe/ARCHITECTURE.md`.

### P1-003 - Feature depends on resolving SCSS/CSS drift

Issue: Homepage visual work depends on HP-01 because `npm run build` can remove existing production-only CSS.

Why it matters: Skipping HP-01 could cause visual regressions unrelated to the intended premium redesign.

Fix: Treat HP-01 as a hard prerequisite before editing hero/cards/sections.

## P2 - Notes

- `npm test` is unavailable as a real verification command.
- `npm audit` found 1 moderate and 3 high vulnerabilities after install; assess separately from UI work.
- No CI workflow was observed.
- `vibe/PLAN.md` is absent by design for retrofit init, so this feature is tracked as an unplanned addition in `vibe/DECISIONS.md`.

## O'Reilly Six Core Areas

- Commands: present in `vibe/CODEBASE.md` and `CLAUDE.md`
- Testing: partial; commands and gaps documented, no real test suite exists
- Project structure: present
- Code style: partial; naming conventions documented, no formal lint config beyond Prettier config
- Git workflow: partial; not formalized
- Boundaries: partial; strongest in `CLAUDE.md`

## Cross-Document Consistency

No P0 contradictions found. Feature spec aligns with observed static HTML/CSS/JS architecture and keeps GitHub Pages deployment in scope.

## Verdict

SPEC HAS WARNINGS - 0 P0, 3 P1 findings. Safe to proceed after acknowledging that HP-01 must be first and `vibe/SPEC.md` remains provisional until human verified.
