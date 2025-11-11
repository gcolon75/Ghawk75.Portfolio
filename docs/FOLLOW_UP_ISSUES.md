# Follow-Up Issues from Hiring Manager Evaluation
**Generated:** November 11, 2025  
**Source:** HIRING_MANAGER_EVALUATION.md

This document lists prioritized improvement tasks identified in the hiring manager evaluation. These are **NOT opened as GitHub issues yet**—this is a reference for the portfolio owner to review and selectively implement.

---

## Priority 0 (P0) - Critical Impact

### Issue 1: Rewrite Hero Section with Role-Specific Positioning
**Description:** Replace poetic "exploring creativity" headline with concrete role positioning that immediately answers "What do you do?"

**Suggested Approach:**
- Lead with job title + specialty areas
- Example: "Systems Designer & Game Mechanics Engineer | Building tactical depth into roguelike experiences"
- Update Hero.js component

**Estimated Effort:** 1 hour  
**Impact:** +25-30% conversion lift

---

### Issue 2: Add Directional Impact Metrics to Top 3 Projects
**Description:** Add scale/outcome indicators to Tower of Greed, Axle, and Amadeus project descriptions to demonstrate impact.

**Suggested Approach:**
- Tower of Greed: Add design doc page count, iteration cycles, validation method
- Axle: Add screen count, user interview count, stakeholder feedback
- Amadeus: Add alert reduction percentage, uptime stats, codebase size
- Update projects.json with new fields or extend existing descriptions

**Estimated Effort:** 2-3 hours  
**Impact:** +20-25% conversion lift

---

### Issue 3: Create Quick Stats Credibility Anchor on Homepage
**Description:** Add scannable stats section providing immediate credibility baseline for recruiters.

**Suggested Approach:**
- Add component above or below Hero section
- Format: "8 Projects | 3 Disciplines | 4 Years Experience | 95% Accessibility Score"
- Pull data dynamically from projects.json where possible

**Estimated Effort:** 30 minutes  
**Impact:** +15-20% conversion lift

---

## Priority 1 (P1) - High Impact

### Issue 4: Tier Projects into "Core Expertise" vs "Demonstrating Range"
**Description:** Add visual grouping or labels to clarify specialization without hiding versatility.

**Suggested Approach:**
- Add "tier" field to projects.json ("core" vs "range")
- Update Projects component to group/label accordingly
- Core: Tower of Greed, Amadeus, Axle (deepest work)
- Range: Remaining projects

**Estimated Effort:** 1 hour  
**Impact:** Clarifies positioning, reduces "generalist" perception

---

### Issue 5: Add Collaboration Context to Each Project
**Description:** Add team size, role on team, and stakeholder information to address teamwork/communication questions.

**Suggested Approach:**
- Add "teamContext" field to projects.json
- Include: team size, your role, cross-functional partners, stakeholders
- Example: "Sole designer working with 2 engineers and 1 PM, presented to C-suite"

**Estimated Effort:** 2 hours  
**Impact:** Addresses team fit and communication skill gaps

---

### Issue 6: Enhance About Page with Career Narrative
**Description:** Add "Journey So Far" section connecting projects chronologically with skill progression story.

**Suggested Approach:**
- Add 2-3 sentence narrative to AboutPage.js
- Show intentional growth arc: "Started in UX → Discovered systems design → Now specializing in game mechanics"
- Link to specific projects as milestones

**Estimated Effort:** 1 hour  
**Impact:** Demonstrates intentional growth vs random project accumulation

---

## Priority 2 (P2) - Medium Impact

### Issue 7: Add Education Section to About Page
**Description:** Prominently display UCSD degree, GPA (if strong), relevant coursework, and honors.

**Suggested Approach:**
- Add new "Education" section to AboutPage.js
- Include: Degree name, graduation year, GPA (if 3.5+), relevant coursework
- Consider adding honors, awards, or relevant extracurriculars

**Estimated Effort:** 30 minutes  
**Impact:** +10-15% conversion lift (provides credential baseline)

---

### Issue 8: Create Process Artifacts Gallery for Top 2 Projects
**Description:** Add 3-4 work-in-progress images per project to demonstrate craft quality and rigor.

**Suggested Approach:**
- Select Tower of Greed and Axle as focus projects
- Add wireframes, iteration screenshots, design system components
- Create new "Process" or "Artifacts" section in project detail pages
- Update assets array in projects.json

**Estimated Effort:** 2 hours  
**Impact:** +10-15% conversion lift for design roles

---

### Issue 9: Add "Currently" Section to About or Hero
**Description:** Show what you're actively learning, building, or seeking to create recency and momentum.

**Suggested Approach:**
- Add to AboutPage.js or Hero.js
- Format: "Currently: [active work] + [learning goal] + [seeking opportunity]"
- Update monthly to maintain freshness

**Estimated Effort:** 30 minutes  
**Impact:** Creates narrative momentum, signals active growth

---

## Priority 3 (P3) - Nice to Have

### Issue 10: Implement Skills Matrix Visualization
**Description:** Create interactive grid showing tool/technology proficiency levels for quick recruiter assessment.

**Suggested Approach:**
- Create new SkillsMatrix component
- Add proficiency levels to skills data (Beginner, Intermediate, Advanced, Expert)
- Display as visual grid with color coding or progress bars
- Consider filtering by discipline (Game Design vs UX vs Engineering)

**Estimated Effort:** 4-6 hours  
**Impact:** Helps recruiters quickly assess fit for role requirements

---

### Issue 11: Add 2-3 Short Testimonials to About/Hire Me Page
**Description:** Include peer, professor, or client quotes for third-party validation.

**Suggested Approach:**
- Reach out to 3-5 past collaborators for short quotes
- Add testimonials section to AboutPage.js or HireMePage.js
- Format: Quote + Name + Relationship/Context
- Keep quotes to 1-2 sentences for scannability

**Estimated Effort:** 2-3 hours (outreach + formatting)  
**Impact:** Boosts credibility through social proof

---

### Issue 12: Create Downloadable "Project Pack" PDF
**Description:** Provide curated 1-pager summaries of top projects as shareable artifact for recruiters.

**Suggested Approach:**
- Design PDF template for project summaries
- Include: Problem, Approach, Result, Tech Stack, Visuals
- Auto-generate from projects.json or create manually
- Add download link to Hire Me page

**Estimated Effort:** 3-4 hours  
**Impact:** Gives recruiters shareable artifact for hiring managers

---

## Performance & Technical Improvements

### Issue 13: Optimize Background Image Performance
**Description:** Test and optimize fixed background image attachment which can cause paint issues on mobile.

**Suggested Approach:**
- Test on low-end mobile devices
- Consider replacing with CSS gradient or optimized image
- Or remove `fixed` attachment and use `scroll`
- Measure before/after with Lighthouse

**Estimated Effort:** 1 hour  
**Impact:** Improves mobile performance, maintains 90%+ Lighthouse score

---

### Issue 14: Add Deployment Status Badge to README
**Description:** Make CI/CD status visible to demonstrate active maintenance and build health.

**Suggested Approach:**
- If using GitHub Actions, add workflow status badge
- If deploying to GitHub Pages, add deployment status
- Update README.md with badge at top

**Estimated Effort:** 15 minutes  
**Impact:** Signals active maintenance and professionalism

---

### Issue 15: Add "Last Reviewed" Dates to Older Projects
**Description:** Address content freshness concerns for 2022-2023 projects.

**Suggested Approach:**
- Add "lastReviewed" field to projects.json
- Display on project cards or detail pages
- Or archive projects older than 3 years unless highly relevant
- Add filter option to hide archived projects

**Estimated Effort:** 30 minutes  
**Impact:** Maintains portfolio freshness perception

---

## Copy & Content Improvements

### Issue 16: Enhance About Page Positioning Summary
**Description:** Strengthen opening paragraph with more concrete specialty areas and examples.

**Suggested Approach:**
- Update AboutPage.js positioning summary
- Replace abstract phrases with concrete examples
- Example provided in HIRING_MANAGER_EVALUATION.md Section 6

**Estimated Effort:** 30 minutes  
**Impact:** Improves clarity and immediate comprehension

---

### Issue 17: Rewrite "What I'm Exploring Now" Section
**Description:** Make current work section more specific and active to show momentum.

**Suggested Approach:**
- Update AboutPage.js exploration section
- Connect to specific portfolio projects
- Show parallel skill development across domains
- Example provided in HIRING_MANAGER_EVALUATION.md Section 6

**Estimated Effort:** 20 minutes  
**Impact:** Demonstrates active growth and focus

---

### Issue 18: Improve Hire Me Page Value Themes
**Description:** Replace abstract descriptions with concrete examples and scale indicators.

**Suggested Approach:**
- Update HireMePage.js value theme descriptions
- Add specific examples with numbers
- Example provided in HIRING_MANAGER_EVALUATION.md Section 6

**Estimated Effort:** 1 hour  
**Impact:** Makes value proposition tangible and credible

---

### Issue 19: Remove "Coming Soon" Notes from CTAs
**Description:** Clean up "Calendar link coming soon" and "Summary pack coming soon" notes that undermine polish.

**Suggested Approach:**
- Either implement features or remove notes entirely
- Focus on strong primary CTA (email)
- Add secondary CTAs only when fully functional

**Estimated Effort:** 5 minutes  
**Impact:** Removes perception of incompleteness

---

### Issue 20: Update Hire Me Page Header CTA
**Description:** Replace "Let's Build Something Great" with more action-oriented, outcome-focused header.

**Suggested Approach:**
- Update HireMePage.js header
- Suggested: "Ready to Ship Systems That Scale and Delight"
- Or similar action-oriented alternative

**Estimated Effort:** 5 minutes  
**Impact:** Signals execution capability vs aspiration

---

## Long-Term Enhancements (Backlog)

### Issue 21: Implement Analytics Tracking
**Description:** Track which projects get most engagement to inform future curation decisions.

**Suggested Approach:**
- Add Google Analytics or similar
- Track project page views, time on page, conversion paths
- Use data to prioritize which projects to feature/expand

**Estimated Effort:** 2 hours  
**Impact:** Data-driven portfolio optimization

---

### Issue 22: Create Role-Specific Landing Pages
**Description:** Build separate entry points for Game Designer vs UX Engineer vs Systems Engineer audiences.

**Suggested Approach:**
- Create alternate homepage layouts filtered by role
- URL structure: `/game-design`, `/ux-design`, `/systems-engineering`
- Filter projects and messaging for each audience
- Link from general homepage or use as direct application links

**Estimated Effort:** 8-10 hours  
**Impact:** Dramatically improves targeting for specialized roles

---

### Issue 23: Build Interactive Demos for Select Projects
**Description:** Create playable prototypes or interactive demos for Tower of Greed or other game projects.

**Suggested Approach:**
- Build browser-based demo of dice rolling mechanics
- Or create interactive Figma prototype embed for Axle
- Host as standalone page or embed in project detail

**Estimated Effort:** 10-20 hours (varies by scope)  
**Impact:** Differentiator for game design roles, demonstrates execution

---

## Usage Instructions

1. **Review** this list and cross-reference with HIRING_MANAGER_EVALUATION.md for full context
2. **Prioritize** based on your target roles and timeline
3. **Create GitHub issues** for tasks you commit to implementing (use these as templates)
4. **Track progress** and measure conversion rate changes after implementation
5. **Iterate** based on feedback from applications and interviews

---

## Summary

- **Total Issues:** 23
- **P0 (Critical):** 3 issues, ~4 hours total
- **P1 (High):** 3 issues, ~4 hours total
- **P2 (Medium):** 3 issues, ~3 hours total
- **P3 (Nice to Have):** 3 issues, ~9-13 hours total
- **Technical:** 3 issues, ~2 hours total
- **Copy/Content:** 5 issues, ~2.5 hours total
- **Long-Term:** 3 issues, ~20-32 hours total

**Recommended First Sprint:** P0 + P1 + P2 = ~11 hours for maximum conversion impact
