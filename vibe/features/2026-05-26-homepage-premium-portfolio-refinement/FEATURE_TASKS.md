# FEATURE_TASKS - Homepage Premium Portfolio Refinement
> Estimated effort: 7 tasks - S: 2, M: 4, L: 1 - approx. 14-18 hours total.

---
### HP-01 - Reconcile style source drift
- **Status**: `[ ]`
- **Size**: M
- **Spec ref**: FEATURE_SPEC.md#edge-cases
- **Dependencies**: None
- **Touches**: `scss/style.scss`, `css/style.css`

**What to do**: Move existing production-only homepage rules from `css/style.css` into `scss/style.scss` or replace them deliberately in the new design source. Rebuild and inspect CSS diff.

**Acceptance criteria**:
- [ ] `npm run build` does not remove required existing UI rules unintentionally.
- [ ] SCSS is the source of truth for main homepage styling.

**Test requirement**: Run `npm run build` and inspect `git diff -- css/style.css`.
**Boundaries**: Do not touch legal page CSS unless required.
**CODEBASE.md update?**: Yes, update styling drift status.
**Architecture compliance**: Follow `ARCHITECTURE.md` styling pattern.
---

### HP-02 - Fix navigation and homepage information architecture
- **Status**: `[ ]`
- **Size**: S
- **Spec ref**: FEATURE_SPEC.md#acceptance-criteria
- **Dependencies**: HP-01
- **Touches**: `index.html`, `js/custom.js` if needed

**What to do**: Align navbar labels and anchors with target sections: About, Expertise, Portfolio, Experience, Contact. Ensure every hash exists.

**Acceptance criteria**:
- [ ] No navbar link targets a missing section ID.
- [ ] Mobile menu still collapses after click.

**Test requirement**: Manual hash-link check in browser.
**Boundaries**: Do not rename legal routes.
**CODEBASE.md update?**: Yes, update section map.
**Architecture compliance**: Preserve one-page static structure.
---

### HP-03 - Build premium hero and CTA system
- **Status**: `[ ]`
- **Size**: M
- **Spec ref**: FEATURE_SPEC.md#ui-specification
- **Dependencies**: HP-01, HP-02
- **Touches**: `index.html`, `scss/style.scss`, `css/style.css`

**What to do**: Replace hero content and styling with premium leadership positioning, required title/tagline, CTAs, and concise credibility signals.

**Acceptance criteria**:
- [ ] Hero includes required name, role, tagline, and CTAs.
- [ ] First viewport looks polished on mobile and desktop.

**Test requirement**: Browser visual check at 375px, 768px, and desktop.
**Boundaries**: Use existing assets unless adding a clearly justified lightweight asset.
**CODEBASE.md update?**: No unless new pattern is introduced.
**Architecture compliance**: Keep GitHub Pages-safe asset paths.
---

### HP-04 - Refine About and Expertise sections
- **Status**: `[ ]`
- **Size**: M
- **Spec ref**: FEATURE_SPEC.md#acceptance-criteria
- **Dependencies**: HP-03
- **Touches**: `index.html`, `scss/style.scss`, `css/style.css`

**What to do**: Rewrite about content and create grouped expertise cards for the seven required categories.

**Acceptance criteria**:
- [ ] About section covers AI Engineering, DevOps, Digital Innovation, Web App, GIS Automation, Drone AI, and Cloud Infrastructure.
- [ ] Expertise categories match the spec exactly.

**Test requirement**: Visual and content review.
**Boundaries**: Keep tone professional and concise.
**CODEBASE.md update?**: Yes if section IDs/classes change.
**Architecture compliance**: Avoid nested cards.
---

### HP-05 - Expand portfolio project cards and optional filters
- **Status**: `[ ]`
- **Size**: L
- **Spec ref**: FEATURE_SPEC.md#acceptance-criteria
- **Dependencies**: HP-04
- **Touches**: `index.html`, `scss/style.scss`, `css/style.css`, `js/custom.js`, `js/custom.min.js`

**What to do**: Build portfolio card grid with project name, category, description, tech stack, and impact. Add lightweight category filter if it remains simple and robust.

**Acceptance criteria**:
- [ ] Requested project examples are represented.
- [ ] Each card has category, stack, and impact.
- [ ] Filter works or is deliberately deferred in docs.

**Test requirement**: Manual card/filter check; run `npm run build` if JS changes.
**Boundaries**: Do not modify nested demo projects.
**CODEBASE.md update?**: Yes, document project section/filter behavior.
**Architecture compliance**: Keep JS small and local.
---

### HP-06 - Refine experience and contact conversion path
- **Status**: `[ ]`
- **Size**: M
- **Spec ref**: FEATURE_SPEC.md#acceptance-criteria
- **Dependencies**: HP-05
- **Touches**: `index.html`, `scss/style.scss`, `css/style.css`

**What to do**: Rework experience presentation into a clearer timeline/role structure and make contact actions obvious.

**Acceptance criteria**:
- [ ] Experience highlights leadership, ownership, scope, and impact.
- [ ] Contact includes email, LinkedIn, GitHub, WhatsApp/contact button, and Indonesia location.

**Test requirement**: Manual content review and link click check.
**Boundaries**: Do not expose new private contact information.
**CODEBASE.md update?**: No unless routes/IDs change.
**Architecture compliance**: Preserve existing contact destinations unless corrected intentionally.
---

### HP-07 - Final validation and documentation update
- **Status**: `[ ]`
- **Size**: S
- **Spec ref**: FEATURE_SPEC.md#conformance-checklist
- **Dependencies**: HP-06
- **Touches**: `vibe/CODEBASE.md`, `vibe/TASKS.md`, generated assets as needed

**What to do**: Run build, preview locally, check responsive layouts, verify anchors/assets, update documentation, and note remaining risks.

**Acceptance criteria**:
- [ ] `npm run build` succeeds.
- [ ] GitHub Pages paths remain valid.
- [ ] No obvious mobile/desktop overlap.
- [ ] Documentation reflects final structure.

**Test requirement**: Build plus manual browser smoke test.
**Boundaries**: Do not introduce unrelated refactors.
**CODEBASE.md update?**: Yes.
**Architecture compliance**: Follow project completion checklist.
---

## Conformance: Homepage Premium Portfolio Refinement

- [ ] All acceptance criteria from FEATURE_SPEC.md are complete.
- [ ] All new and existing build steps pass or documented if unavailable.
- [ ] Responsive layouts checked.
- [ ] Linter/test gaps are documented.
- [ ] CODEBASE.md updated for structural changes.
- [ ] ARCHITECTURE.md updated if new patterns are introduced.
