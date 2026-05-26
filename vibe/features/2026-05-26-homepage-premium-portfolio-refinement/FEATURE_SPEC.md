# FEATURE_SPEC - Homepage Premium Portfolio Refinement
> Created: 2026-05-26
> Status: planned
> Feature type: significant UI/UX refinement

## Feature Overview

Refine the homepage into a premium professional portfolio for Muhamad Arwin Wijaya with clear positioning as AI Engineer Lead and DevOps Lead. The page should communicate leadership, technical depth, and project impact across AI Engineering, DevOps, GIS automation, dashboards, cloud infrastructure, and automation systems.

## User Stories

- As a recruiter or hiring leader, I can understand Muhamad's primary roles and technical positioning within the first viewport.
- As a technical reviewer, I can scan expertise areas, project impact, and infrastructure/AI capabilities without reading dense paragraphs.
- As a potential collaborator, I can quickly view portfolio work, download the CV, and contact Muhamad.

## Acceptance Criteria

- Hero displays "Muhamad Arwin Wijaya" and "AI Engineer Lead | DevOps Lead".
- Hero supporting copy includes: "Building AI-powered systems, DevOps infrastructure, automation workflows, and geospatial intelligence platforms."
- Hero includes CTAs for View Portfolio, Download CV, and Contact Me.
- About section summarizes AI Engineering, DevOps, Digital Innovation, Web App, GIS Automation, Drone AI, and Cloud Infrastructure in a confident professional tone.
- Expertise section groups skills into AI Engineering, DevOps & Cloud Infrastructure, Web Application Development, GIS & Geospatial Automation, Data Dashboard & Analytics, Automation & Scripting, and Technical Leadership.
- Portfolio/projects section uses cards with project name, category, short description, tech stack, and business/technical impact.
- Project content includes the requested examples where appropriate: Drone AI Plantation Analytics, AI Banana Girth Web Application, GGF Field Viewer Web GIS, Carbon Footprint Dashboard, AWS Cost Monitoring & Infrastructure Optimization, QGIS Automation for Plantation Analytics, FaS-Track / Tractor Operational Dashboard, and DevOps Infrastructure Monitoring & Deployment.
- Experience section emphasizes AI Engineer Lead and DevOps Lead ownership, leadership, scope, and impact.
- Contact section includes email, LinkedIn, GitHub, WhatsApp/contact button, and Indonesia location.
- CV download uses the existing `cv/CV-Muhamad_Arwin_Wijaya.pdf`.
- Sticky navbar, smooth scroll, responsive mobile menu, clean cards, clear CTAs, and basic SEO metadata are preserved or improved.
- Build remains safe for GitHub Pages root deployment.

## Scope Boundaries

Included:
- Refine `index.html` structure and content.
- Add or reconcile homepage styling in source SCSS/CSS.
- Update `js/custom.js` only if needed for filters/toggles/anchor fixes.
- Preserve downloadable CV and existing public routes.
- Add project filtering if it can be done with minimal JS and no new framework.

Deferred:
- Rebuilding the site in React/Next/Vite.
- Changing nested portfolio demo sites.
- Replacing all visual assets.
- Full automated test suite beyond lightweight validation unless requested.

## Integration Points

- `index.html` for content, section structure, metadata, and anchor links.
- `scss/style.scss` and `css/style.css` for visual refinement. Existing drift must be handled deliberately.
- `js/custom.js` and `js/custom.min.js` for smooth scroll, project filter, list toggles, or anchor-safe behavior.
- `cv/CV-Muhamad_Arwin_Wijaya.pdf` for CV CTA.
- `sw.js` cache list may need version bump if major CSS/JS asset behavior changes.
- `sitemap.xml` and metadata should remain compatible with GitHub Pages.

## UI Specification

Aesthetic direction: premium technical leadership portfolio. Use a restrained dark navy/black/white foundation with green-blue accents, tighter typography, strong hierarchy, generous section spacing, and cards that feel operational and credible rather than decorative. Keep the visual language clean and modern, avoiding a cheap template look.

Recommended structure:
- Sticky top nav with brand "Muhamad Arwin Wijaya" or concise "MAW"; links: About, Expertise, Portfolio, Experience, Contact.
- Hero: first viewport but leave a hint of the next section visible. Use dark overlay or deep background treatment over an actual relevant image. Primary signals: name, role, tagline, three CTAs, and 3-4 compact credibility metrics/capability chips.
- About: two-column desktop layout with concise narrative and leadership/impact highlights.
- Expertise: grouped skill cards, 7 categories, compact and scannable.
- Portfolio: filterable card grid using categories such as AI, DevOps, GIS, Dashboard, Automation. Each card includes stack tags and impact.
- Experience: timeline or vertical role cards emphasizing leadership and ownership.
- Contact: direct action strip with email, LinkedIn, GitHub, WhatsApp, and location.

Responsive behavior:
- Mobile nav collapses cleanly.
- Hero text and CTAs wrap without overlap.
- Cards become one column on mobile, two on tablet, three on desktop where space allows.
- Avoid nested cards and excessive decorative elements.

## Non-Functional Requirements

- Keep performance light; no heavy framework or large new dependency.
- Keep assets GitHub Pages compatible.
- Maintain accessible links, alt text for important images, sufficient contrast, and keyboard-friendly anchors.
- Avoid hardcoding all portfolio data inside unrelated JS; if adding structured data, keep it small and clearly named.

## Edge Cases

- Missing or renamed CV file should not break the page silently.
- Existing service worker cache may show old CSS/JS unless cache version is bumped.
- Rebuilding CSS from stale SCSS can remove production-only rules.
- Anchor IDs must match navbar links.

## Conformance Checklist

- [ ] All acceptance criteria are visibly represented on homepage.
- [ ] Mobile, tablet, and desktop layouts have no overlapping text or broken cards.
- [ ] `npm run build` succeeds after dependencies are installed.
- [ ] GitHub Pages root paths remain valid.
- [ ] Existing legal pages and embedded portfolio demos still link correctly.
- [ ] `vibe/CODEBASE.md` updated if files, commands, or patterns change.
