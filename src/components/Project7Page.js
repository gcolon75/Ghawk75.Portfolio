import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project7Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import hero from '../assets/tower-of-greed-hero.jpg';

function Project7_TowerOfGreedPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const PHASE = 'Concept / Design';
  const LAST_UPDATED = 'November 10, 2025';
  const PROGRESS = 0.20; // 20% — concept phase

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          {/* Status banner */}
          <div className="status-banner" role="status" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            <strong>In Development:</strong> Tower of Greed is currently {PHASE}. Public concept summary only.
          </div>

          {/* Hero + tagline */}
          <div className="hero-wrap">
            <h1>Tower of Greed</h1>
            <p className="tagline"><em>A dice-driven roguelike RPG where every turn balances risk and payoff.</em></p>

            <div className="hero-media">
              <img src={hero} alt="Tower of Greed concept" className="project-img" />
              <div className="wip-watermark" aria-hidden="true">CONCEPT</div>
            </div>

            {/* Meta chips */}
            <div className="meta-chips">
              <span className="chip">Phase: {PHASE}</span>
              <span className="chip">Last updated: {LAST_UPDATED}</span>
            </div>

            {/* Tech tags */}
            <div className="tech-tags">
              <span className="tag">Game Design</span>
              <span className="tag">Systems Design</span>
              <span className="tag">Roguelike</span>
              <span className="tag">Dice Systems</span>
            </div>

            {/* Progress */}
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
              <div className="progress-label">{Math.round(PROGRESS * 100)}% concept & planning</div>
            </div>

            <div className="inline-links">
              <Link to="/projects" className="back-link">← Back to Projects</Link>
            </div>
          </div>
        </div>

        {/* ===== Privacy-safe sections ===== */}

        <section className="pv-section compact">
          <h2>Summary</h2>
          <p>
            Tower of Greed is a dice-driven roguelike RPG where every turn balances risk and payoff. 
            Players craft a customizable Attack Die, manage a resource-gated Subclass Die, and climb a 
            perilous tower using <strong>smart sequencing over raw RNG</strong>. The concept focuses on 
            tactical dice-building, subclass identity, and meaningful progression.
          </p>
        </section>

        <section className="pv-section compact">
          <h2>Core Design Pillars</h2>
          <ul className="tight">
            <li><strong>Customizable Attack Die:</strong> Choose D4/D6/D8 with attunement capacity and shard upgrades.</li>
            <li><strong>Subclass Die:</strong> Unique resource systems (Blood, Grit, Edge) used every 3–4 turns.</li>
            <li><strong>Turn-based combat loop:</strong> Emphasizes setup vs. burst timing and resource management.</li>
            <li><strong>Progression:</strong> Dice Shards and Ascension for subclass scaling.</li>
          </ul>
        </section>

        <section className="pv-section compact">
          <h2>Concept Materials</h2>
          <p>
            The following concept materials are available for download:
          </p>
          <div className="inline-links">
            <a 
              href="/assets/tower-of-greed/towerofgreedconcept.txt" 
              className="view-link"
              style={{ marginRight: '1.5rem' }}
              download
            >
              Read concept summary (TXT)
            </a>
            <a 
              href="/assets/tower-of-greed/Tower-of-Greed-Concept-v1.00.pdf" 
              className="view-link"
              download
            >
              Download concept (PDF)
            </a>
          </div>
        </section>

        <section className="pv-section compact">
          <h2>Notes</h2>
          <p>
            This page provides high-level concept information only. Detailed design notes, 
            numeric balance tables, and internal roadmaps remain private. The concept materials 
            linked above offer additional context on the core systems and design philosophy.
          </p>
        </section>
      </div>

      <ContactFooter />
    </div>
  );
}

export default Project7_TowerOfGreedPage;
