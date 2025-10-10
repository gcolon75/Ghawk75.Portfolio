import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project7Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

// 🔹 Replace with your assets
import hero from '../assets/TowerOfGreedThumb.png';
import slidesPDF from '../assets/TowerOfGreedSlides.pdf'; // export PPTX → PDF

function Project7_TowerOfGreedPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 🔧 Edit these two lines as you make progress
  const PHASE = 'Pre-Alpha (In Development)';
  const LAST_UPDATED = 'September 5, 2025';
  const PROGRESS = 0.35; // 0 → 1 (35% here)

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          {/* STATUS BANNER */}
          <div className="status-banner" role="status" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            <strong>In Development:</strong> Tower of Greed is currently {PHASE}.
            This page shows concept art, design notes, and a live roadmap.
          </div>

          {/* HERO */}
          <div className="hero-wrap">
            <h1>Tower of Greed — Risk • Reward • Cash Out</h1>
            <div className="hero-media">
              <img src={hero} alt="Tower of Greed cover: a looming tower and a cash-out lever" className="project-img" />
              <div className="wip-watermark" aria-hidden="true">WORK&nbsp;IN&nbsp;PROGRESS</div>
            </div>

            {/* QUICK META */}
            <div className="meta-chips">
              <span className="chip">Phase: {PHASE}</span>
              <span className="chip">Last updated: {LAST_UPDATED}</span>
              <span className="chip looking">Looking for playtesters</span>
            </div>

            {/* TECH TAGS */}
            <div className="tech-tags">
              <span className="tag">Unity</span>
              <span className="tag">C#</span>
              <span className="tag">Roguelike</span>
              <span className="tag">System Design</span>
              <span className="tag">Economy</span>
            </div>

            {/* PROGRESS BAR */}
            <div className="progress-block" aria-label="Development progress">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.round(PROGRESS * 100)}%` }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(PROGRESS * 100)}
                  role="progressbar"
                />
              </div>
              <div className="progress-label">{Math.round(PROGRESS * 100)}% complete</div>
            </div>

            {/* SHORT BLURB */}
            <p className="lede">
              Turn-based roguelike where you <strong>buy in</strong>, climb a randomized tower, and decide when to
              <strong> cash out</strong>. Each floor raises your reward multiplier—and your chance to lose everything if you die.
            </p>

            <div className="inline-links">
              <Link to="/projects" className="back-link">← Back to Projects</Link>
            </div>
          </div>
        </div>

        {/* ROADMAP */}
        <section className="roadmap-section">
          <h2>Roadmap (live)</h2>
          <ul className="roadmap-list">
            <li className="done">Core loop draft: buy-in → floors → cash-out</li>
            <li className="done">Multiplier economy v1 (caps + anti-exploit)</li>
            <li className="wip">Procedural encounter pools (combat / trap / encounter)</li>
            <li className="wip">Class kits v1 (Warrior / Rogue / Mage) + elemental rules</li>
            <li className="todo">Hub & meta-progression scaffolding</li>
            <li className="todo">Prototype UI pass + accessibility checks</li>
            <li className="todo">Public playtest slice</li>
          </ul>
        </section>

        {/* FEATURES (clearly marked as planned/in-progress) */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Planned Core Features</h2>
              <ul>
                <li><strong>Risk vs. Reward Loop:</strong> higher floors boost a multiplier; death forfeits the pot.</li>
                <li><strong>Procedural Floors:</strong> enemies, traps, loot, and events from curated pools.</li>
                <li><strong>Turn-Based Tactics:</strong> attack/block/ability/item with elemental strengths/weaknesses.</li>
                <li><strong>Class Diversity:</strong> distinct stats/abilities for replayability.</li>
                <li><strong>Safe “Casino” Tension:</strong> push-your-luck psychology with fake currency and guardrails.</li>
                <li><strong>Meta-Progression (planned):</strong> unlocks and hub upgrades between runs.</li>
              </ul>
            </section>

            <section className="contribution-section">
              <h2>My Role & Contributions</h2>
              <ul>
                <li>Directed game vision and core loop; authored design pillars & pacing.</li>
                <li>Designed <em>wager/multiplier</em> economy and anti-exploit constraints.</li>
                <li>Specced procedural encounter pools and class kit structure.</li>
                <li>Set up Unity prototyping workflow; organized weekly goals & playtests.</li>
                <li>Led research on reference titles and tension mechanics.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* DEV LOG */}
        <section className="devlog-section">
          <h2>Dev Log (highlights)</h2>
          <ul className="devlog">
            <li><time dateTime="2025-09-05">Sep 5, 2025</time> — Added roadmap + progress tracker; finalized economy caps v1.</li>
            <li><time dateTime="2025-08-30">Aug 30, 2025</time> — Wrote encounter pool spec; class kit sketches.</li>
            <li><time dateTime="2025-08-20">Aug 20, 2025</time> — Drafted buy-in → floor multiplier → cash-out loop.</li>
          </ul>
        </section>

        {/* SLIDE DECK */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>Pitch Deck</h2>
            <iframe src={slidesPDF} title="Tower of Greed — Slide Deck" sandbox="allow-scripts allow-same-origin" allowFullScreen />
            <a className="view-link" href={slidesPDF} download style={{ marginTop: '1rem' }}>
              Download PDF
            </a>
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}

export default Project7_TowerOfGreedPage;
