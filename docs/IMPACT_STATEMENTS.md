# Impact Statements Documentation

This document lists the privacy-safe impact statements for the top 3 flagship projects in the portfolio.

## Purpose

Impact statements demonstrate measurable improvements and technical achievements while respecting privacy constraints and avoiding disclosure of proprietary metrics or client data.

## Flagship Projects Impact Statements

### Tower of Greed

**Impact Summary:**
Improved initial load stability and UI rhythm by eliminating layout shifts and modularizing dice systems to prevent complexity spikes.

**How:**
Applied critical CSS and grid refactor to stabilize initial render; refactored dice subsystems into smaller, lazy-initialized modules to control complexity and memory use.

**Data Location:** `src/data/projects.json` → `tower-of-greed` → `impactSummary` and `impactHow`

---

### Axle

**Impact Summary:**
Improved onboarding clarity and diagnostic flow using an AI-guided assistant and accessible navigation patterns.

**How:**
Built an iterative diagnostic assistant, validated flows with scenario-based playtests, and simplified navigation semantics to reduce cognitive load for new users.

**Data Location:** `src/data/projects.json` → `axle` → `impactSummary` and `impactHow`

---

### Project Valine

**Impact Summary:**
Reduced render cost and improved UX clarity by applying code-splitting and modular onboarding patterns.

**How:**
Profiled hot paths, split large bundles, and introduced a focused onboarding artifact that guides new users through common flows without heavy initial rendering.

**Data Location:** `src/data/projects.json` → `project-valine` → `impactSummary` and `impactHow`

---

## Usage Guidelines

### For Maintainers

1. **Privacy-First:** Impact statements must avoid disclosing:
   - Specific user counts or growth metrics
   - Proprietary client data
   - Financial information
   - Internal company processes

2. **Technical Focus:** Emphasize:
   - Technical improvements (performance, accessibility, UX)
   - Design decisions and rationale
   - Problem-solving approaches
   - Observable quality improvements

3. **Consistency:** Use the following structure:
   - `impactSummary`: One-line statement of the improvement (< 150 characters)
   - `impactHow`: Technical explanation of the approach (2-3 sentences, < 300 characters)

### For Developers

Impact statements are displayed in:
- Project cards via the `ProjectCard` component
- Project detail pages
- QuickStats component (counts projects with `impactSummary`)

To add impact statements to a new project:

```json
{
  "id": "your-project-id",
  "impactSummary": "Brief one-line impact statement",
  "impactHow": "Technical explanation of how the impact was achieved"
}
```

The legacy `impact.statement` and `impact.how` fields are maintained for backward compatibility but new implementations should use `impactSummary` and `impactHow`.

---

## Validation

Impact statements should be:
- ✅ Measurable or observable
- ✅ Technical and specific
- ✅ Privacy-safe
- ✅ Under character limits
- ❌ Not using proprietary metrics
- ❌ Not disclosing client-confidential information
