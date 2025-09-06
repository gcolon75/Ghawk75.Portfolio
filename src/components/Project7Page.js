import React, { useEffect } from 'react';
import './Project7Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

// 🔹 Replace these with your actual assets (filenames are examples)
import hero from '../assets/tower-of-greed-hero.jpg';
import slidesPDF from '../assets/TowerOfGreedSlides.pdf'; // export your PPTX to PDF and place here

function Project7_TowerOfGreedPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Tower of Greed — Risk • Reward • Cash Out</h1>
          <img src={hero} alt="Tower of Greed hero" className="project-img" />

          <p>
            A turn-based roguelike where you <strong>buy in</strong>, climb a randomized tower,
            and decide when to <strong>cash out</strong>. Each floor raises your reward multiplier—
            and your chance to lose everything if you die.
          </p>

          <div className="tech-tags">
            <span className="tag">Unity</span>
            <span className="tag">C#</span>
            <span className="tag">Roguelike</span>
            <span className="tag">System Design</span>
            <span className="tag">Economy</span>
          </div>
        </div>

        {/* 🔷 Features */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Core Features</h2>
              <ul>
                <li><strong>Risk vs. Reward Loop:</strong> higher floors boost a multiplier; death forfeits the pot.</li>
                <li><strong>Procedural Floors:</strong> enemies, traps, loot, and events pulled from curated pools for run-to-run variety.</li>
                <li><strong>Turn-Based Tactics:</strong> simple choices (attack/block/ability/item) with meaningful elemental strengths/weaknesses.</li>
                <li><strong>Class Diversity:</strong> distinct stats/abilities create fresh strategies and replayability.</li>
                <li><strong>Safe “Casino” Tension:</strong> push-your-luck psychology with fake currency and clear guardrails.</li>
                <li><strong>Meta-Progression (planned):</strong> unlocks and hub upgrades to expand options between runs.</li>
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

        {/* 🔷 Challenges & Solutions */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Challenges</h2>
              <ul>
                <li>Balancing the economy so greed is exciting without trivializing wins.</li>
                <li>Keeping procedural floors fair while preserving uncertainty.</li>
                <li>Preventing infinite-money exploits from buy-in/ante mechanics.</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>Solutions</h2>
              <ul>
                <li>Risk-weighted event tables and soft caps on multiplier spikes.</li>
                <li>Negative-encounter probability that scales with wagers & floor depth.</li>
                <li>Bank/”cash back” events with limits; minimum/maximum ante per tower tier.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* 🔷 Slide Deck */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>Pitch Deck</h2>
            <iframe
              src={slidesPDF}
              title="Tower of Greed — Slide Deck"
              allowFullScreen
            />
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
