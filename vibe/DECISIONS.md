# DECISIONS - marwinwijaya.github.io
> Append-only. Every drift, scope change, tech choice, and discovery is logged with context.
> Onboarded via vibe-init on 2026-05-26. All decisions prior to this date are untracked.

## Decision Types

- drift - deviated from ARCHITECTURE.md
- blocker-resolution - impossible; workaround found
- tech-choice - chose between valid approaches
- scope-change - added/removed via change command
- discovery - unexpected finding affecting future tasks

## Format

### D-[ID] - [Short title]
- **Date**: 2026-05-26 - **Task**: [TASK-ID] - **Type**: [type]
- **What was planned**: ...
- **What was done**: ...
- **Why**: ...
- **Alternatives considered**: ...
- **Impact on other tasks**: ...
- **Approved by**: human | agent-autonomous

---

### D-001 - Project onboarded via vibe-init
- **Date**: 2026-05-26 - **Task**: vibe-init - **Type**: discovery
- **What was planned**: Retrofit an existing Web CV and Portfolio repository into the vibe workflow.
- **What was done**: Generated `CLAUDE.md` and `vibe/` scaffold from codebase analysis. Stack: static HTML/CSS/JS, Bootstrap, jQuery, Sass, Terser, optional Express server. Pattern: static single-page portfolio with standalone legal pages and embedded portfolio demos.
- **Why**: Future portfolio refinement work needs stable context, boundaries, and task tracking.
- **Alternatives considered**: Manual ad hoc edits without onboarding; rejected because the project has build drift and deployment assumptions that should be visible before feature work.
- **Impact on other tasks**: `vibe-add-feature`, `vibe-fix-bug`, `vibe-review`, and `vibe-design` now have project context. `SPEC.md` remains provisional until human verified.
- **Approved by**: human

---

### D-002 - Build output not retained during init
- **Date**: 2026-05-26 - **Task**: vibe-init - **Type**: discovery
- **What was planned**: Validate the build without changing existing UI.
- **What was done**: Ran `npm install` and `npm run build`. Build succeeded after installing dependencies, but generated CSS would remove production-only rules currently present in `css/style.css`. Build artifacts were reverted so onboarding remains documentation-only.
- **Why**: Keeping generated output would change current site styling outside the requested init scope.
- **Alternatives considered**: Keep generated CSS; rejected because it would silently regress existing UI.
- **Impact on other tasks**: First visual feature should reconcile `scss/style.scss` and `css/style.css`.
- **Approved by**: agent-autonomous

---

## Feature Start - Homepage Premium Portfolio Refinement - 2026-05-26
> Folder: `vibe/features/2026-05-26-homepage-premium-portfolio-refinement/`
> Refine the homepage into a premium AI Engineer Lead and DevOps Lead portfolio.
> Tasks: HP-01, HP-02, HP-03, HP-04, HP-05, HP-06, HP-07 | Estimated: 14-18 hours
> Drift logged below.

### D-003 - Homepage refinement planned as tracked feature
- **Date**: 2026-05-26 - **Task**: feature planning - **Type**: scope-change
- **What was planned**: Prepare the existing Web CV for premium AI Engineer Lead and DevOps Lead personal branding.
- **What was done**: Created feature spec, implementation plan, and task breakdown without changing homepage UI yet.
- **Why**: The user requested analysis and a scalable workflow before major rewrite. Existing SCSS/CSS drift makes immediate UI edits risky.
- **Alternatives considered**: Directly rewrite `index.html` and CSS during init; deferred because onboarding should establish project context first.
- **Impact on other tasks**: HP-01 must run before major visual changes so generated CSS does not regress current styling.
- **Approved by**: human

---

## 2026-05-26 - Spec review: add-feature
> P0: 0 - P1: 3 - P2: 4
> Action: continued with warnings logged
> Report: `vibe/spec-reviews/2026-05-26-add-feature.md`
