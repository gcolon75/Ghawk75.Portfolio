import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project8Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import hero from '../assets/project-valine-hero.png';

function Project8_ProjectValinePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const PHASE = 'Concept / Pre-MVP';
  const LAST_UPDATED = 'September 10, 2025';
  const PROGRESS = 0.15; // 15% — tweak anytime

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          {/* Status (kept, but minimal copy) */}
          <div className="status-banner" role="status" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            <strong>In Development:</strong> project valine is currently {PHASE}. Public summary only.
          </div>

          {/* Hero + tagline */}
          <div className="hero-wrap">
            <h1>project valine</h1>
            <p className="tagline"><em>Social-native talent discovery for film, TV, and theatre.</em></p>

            <div className="hero-media">
              <img src={hero} alt="project valine concept" className="project-img" />
              <div className="wip-watermark" aria-hidden="true">CONCEPT</div>
            </div>

            {/* Meta chips (private-friendly: no recruiting chip) */}
            <div className="meta-chips">
              <span className="chip">Phase: {PHASE}</span>
              <span className="chip">Last updated: {LAST_UPDATED}</span>
            </div>

            {/* Progress (high-level only) */}
            <div className="progress-block" aria-label="Development progress">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.round(PROGRESS * 100)}%` }}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(PROGRESS * 100)}
                />
              </div>
              <div className="progress-label">{Math.round(PROGRESS * 100)}% planning & prototyping</div>
            </div>

            <div className="inline-links">
              <Link to="/projects" className="back-link">← Back to Projects</Link>
            </div>
          </div>
        </div>

        {/* ===== Condensed, public-safe sections ===== */}

        <section className="pv-section compact">
          <h2>Summary</h2>
          <p>
            We’re building a place where creative work is <strong>shown like social</strong> and
            <strong> discovered like search</strong>. Early focus is on actors and writers in Southern CA,
            with simple profiles, short clips, and basic discovery.
          </p>
        </section>

        <section className="pv-section compact">
          <h2>What We’re Building (Public Scope)</h2>
          <ul className="tight">
            <li>Feed + profile concepts with short clip posts.</li>
            <li>Lightweight search & filters (role, location, skills).</li>
            <li>Private prototype of “script ↔ scene” linking (high level only here).</li>
          </ul>
        </section>

        <section className="pv-section compact">
          <h2>Current Focus</h2>
          <ul className="tight">
            <li>Clickable Figma prototype of core flows.</li>
            <li>Invite-only test cohort (very small, private).</li>
            <li>Safety & trust v1 (verification, reporting, captions).</li>
          </ul>
        </section>

        <section className="pv-section compact">
          <h2>Notes</h2>
          <p>
            Detailed strategy, metrics, and internal docs are private. This page will stay
            intentionally brief until we’re ready for a broader reveal.
          </p>
        </section>
      </div>

      <ContactFooter />
    </div>
  );
}

export default Project8_ProjectValinePage;
