import React, { useEffect } from 'react';
import './Project6Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

// 🔹 Replace with your assets
import hero from '../assets/discord-agent-hero.jpg';

function Project8_AmadeusAgentPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Amadeus — AI Agent for Discord</h1>
          <img src={hero} alt="Amadeus Discord agent hero" className="project-img" />

          <p>
            An always-on Windows desktop agent that watches stocks and video-game deals,
            computes indicators, and posts <strong>briefs + alerts</strong> to Discord.
          </p>

          <div className="tech-tags">
            <span className="tag">Python 3.11</span>
            <span className="tag">Discord</span>
            <span className="tag">Polygon.io</span>
            <span className="tag">Automation</span>
            <span className="tag">Data</span>
          </div>
        </div>

        {/* 🔷 Features */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>What It Does</h2>
              <ul>
                <li><strong>Stocks:</strong> polls a watchlist, logs prices to CSV, computes <em>SMA20/50</em> and <em>RSI14</em>, and keeps all-time highs/lows.</li>
                <li><strong>Options (NVDA, default):</strong> tracks nearest Friday ATM ±1 strikes via Polygon and posts updates.</li>
                <li><strong>Deals:</strong> optional IsThereAnyDeal integration for multi-store game sales.</li>
                <li><strong>Briefs:</strong> morning (7:30 am PT) and evening (10:00 pm PT) summaries to Discord.</li>
                <li><strong>Hygiene:</strong> quiet hours, per-alert cooldown, and de-dupe so channels don’t spam.</li>
                <li><strong>Ops:</strong> runs on Windows at logon via Task Scheduler XML; all configuration via <code>.env</code>.</li>
              </ul>
              <p className="small-note">Repo: <a href="https://github.com/gcolon75/ghawk75-ai-agent" target="_blank" rel="noreferrer">gcolon75/ghawk75-ai-agent</a></p>
            </section>

            <section className="contribution-section">
              <h2>My Role & Contributions</h2>
              <ul>
                <li>Designed the agent architecture and Discord posting flows.</li>
                <li>Implemented market pipelines, indicators, and paper-trade hooks.</li>
                <li>Wrote the daily brief generator and quiet-hours/cooldown logic.</li>
                <li>Packaged run-on-logon automation and environment bootstrap.</li>
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
                <li>Reducing “alert noise” while still catching important moves.</li>
                <li>Managing rate limits and transient API failures.</li>
                <li>Time-zone correctness for scheduled briefs & market hours.</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>Solutions</h2>
              <ul>
                <li>Per-symbol cooldown + dedupe + quiet hours.</li>
                <li>Backoff, retries, and simple health pings to Discord on start.</li>
                <li>All timestamps normalized; schedules expressed in PT.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
export default Project8_AmadeusAgentPage;
