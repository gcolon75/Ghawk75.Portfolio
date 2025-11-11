# QA Validation Checklist

Quick reference for validating the Space Hero + Employer Conversion features.

## Automated Tests ✅ COMPLETE

- [x] **Build:** Successful (96.1 kB JS, 10.62 kB CSS)
- [x] **Tests:** 17/17 passing
- [x] **Security:** CodeQL - 0 alerts
- [x] **Hero Planets:** Tabbable, ARIA labels, tooltips
- [x] **Impact Statements:** 3+ projects with "How?" notes
- [x] **Privacy Flags:** All projects
- [x] **Data-Driven:** QuickStats & SkillMatrix
- [x] **SEO:** JSON-LD Person + Project schemas
- [x] **Education:** UCSD in About & Person schema
- [x] **OG Images:** Project-specific support
- [x] **Accessibility:** Semantic HTML, ARIA
- [x] **Reduced Motion:** CSS media queries (6 files)

## Manual Testing Recommendations

### Keyboard Navigation
- [ ] Tab through all 4 hero planets (Systems, Mechanics, Performance, Accessibility)
- [ ] Verify focus indicators are visible on each planet
- [ ] Press Enter or Space to navigate to filtered projects
- [ ] Tab to "Pause Orbits" button
- [ ] Press Space/Enter to toggle pause state
- [ ] Verify pause persists on page reload (localStorage)

### Screen Reader Testing
- [ ] Launch NVDA/JAWS (Windows) or VoiceOver (Mac)
- [ ] Navigate to hero section
- [ ] Verify planets announce: "Systems Design - Filter projects by..."
- [ ] Verify tooltips are announced on focus
- [ ] Navigate to a featured project card
- [ ] Verify "How?" button announces expanded/collapsed state
- [ ] Activate "How?" and verify content is read

### Reduced Motion
- [ ] **Windows:** Settings → Accessibility → Visual effects → Animation effects OFF
- [ ] **Mac:** System Preferences → Accessibility → Display → Reduce motion
- [ ] **Linux:** Settings → Universal Access → Reduce animation
- [ ] Reload portfolio page
- [ ] Verify planet orbits are paused automatically
- [ ] Click "Resume Orbits" button
- [ ] Verify orbits resume despite system preference
- [ ] Click "Pause Orbits" to re-pause

### Visual Inspection
- [ ] Verify planets orbit smoothly (if not paused)
- [ ] Check planet tooltips appear on hover
- [ ] Verify impact "How?" sections expand/collapse smoothly
- [ ] Check all 3+ featured projects show impact statements
- [ ] Verify QuickStats shows computed values
- [ ] Verify SkillMatrix shows project counts per skill

### Cross-Browser Testing
- [ ] **Chrome:** Latest version
- [ ] **Firefox:** Latest version
- [ ] **Safari:** Latest version (Mac/iOS)
- [ ] **Edge:** Latest version
- [ ] Verify consistent behavior across all browsers

### Mobile Responsive
- [ ] Test at 480px width (mobile)
- [ ] Test at 768px width (tablet)
- [ ] Test at 1024px width (desktop)
- [ ] Verify planet orbits scale appropriately
- [ ] Verify touch interactions work on mobile

### CI Workflows (Automatic on PR merge)
- [ ] Lighthouse CI runs and passes
- [ ] Pa11y accessibility scan passes
- [ ] Lychee link checker completes
- [ ] Content validation passes
- [ ] Performance budget met

## Quick Verification Commands

```bash
# Run all tests
npm test -- --watchAll=false

# Build and check size
npm run build

# Serve locally
npx serve -s build

# Run specific QA tests
npm test -- src/validation/qa-validation.test.js --watchAll=false
```

## Expected Results

### Test Output
```
Test Suites: 2 passed, 2 total
Tests:       17 passed, 17 total
```

### Build Output
```
File sizes after gzip:
  96.1 kB   build/static/js/main.e7e5d6ec.js
  10.62 kB  build/static/css/main.3a246681.css
```

### Featured Projects with Impact
1. Tower of Greed
2. Project Valine
3. axle: Mobile Mechanic App

### Reduced Motion Files
- `src/components/Hero.css`
- `src/components/AboutPage.css`
- `src/components/Project1Page.css`
- `src/components/Project7Page.css`
- `src/components/HireMePage.css`
- `src/components/ValueThemes.css`

## Issue Reporting

If you find any issues during manual testing:

1. Document the issue:
   - What were you doing?
   - What did you expect?
   - What actually happened?
   - Browser/OS/Device?
   - Screenshot if applicable

2. Create a follow-up issue with:
   - Clear title
   - Reproduction steps
   - Expected vs actual behavior
   - Environment details

## Sign-Off

- [x] Automated tests: **PASS** ✅
- [ ] Manual keyboard testing: _Pending_
- [ ] Screen reader testing: _Pending_
- [ ] Reduced motion testing: _Pending_
- [ ] Cross-browser testing: _Pending_

**Overall Status:** Automated validation complete. Manual testing recommended but not blocking.

**Ready for Deployment:** Yes, pending optional manual verification.
