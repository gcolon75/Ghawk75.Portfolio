import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project8Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import ProjectMeta from './ProjectMeta';
import projectData from '../data/projects.json';
import hero from '../assets/project-valine-hero.png';

function Project8_ProjectValinePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const PHASE = 'Concept / Pre-MVP';
  const LAST_UPDATED = 'September 10, 2025';
  const PROGRESS = 0.15; // 15% — tweak anytime

  const project = projectData.projects.find(p => p.id === 'project-valine');

  return (
    <div className="App">
      <div className="content">
        <div className="project-page container">
          <Header />

          {/* Status pill above title */}
          <div className="status-banner" role="status" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            <strong>In Development:</strong> project valine is currently {PHASE}. Public summary only.
          </div>

          {/* Hero + tagline */}
          <div className="hero-wrap">
            <h1>project valine</h1>
            <p className="tagline"><em>A modern platform connecting creative professionals.</em></p>

            {/* Meta in 2-column grid near the top */}
            <ProjectMeta
              role={project?.role}
              skills={project?.tags?.disciplines}
              concepts={project?.tags?.specialties}
              tools={project?.tags?.technologies}
            />

            {/* Progress panel beneath meta */}
            <div className="progress-panel" aria-label="Development progress">
              <h3>Progress</h3>
              <div className="progress-info">
                <span className="progress-item">Phase: {PHASE}</span>
                <span className="progress-item">Last updated: {LAST_UPDATED}</span>
              </div>
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

            <div className="hero-media">
              <img src={hero} alt="project valine concept" className="project-img" />
              <div className="wip-watermark" aria-hidden="true">CONCEPT</div>
            </div>

            <div className="inline-links">
              <Link to="/#projects" className="back-link">← Back to Projects</Link>
            </div>
          </div>
        </div>

        {/* ===== Condensed, public-safe sections ===== */}

        <section className="pv-section compact">
          <h2>Summary</h2>
          <p>
            Building a platform that combines <strong>social-style presentation</strong> with
            <strong> search-driven discovery</strong>. Currently developing core features
            with a limited test group.
          </p>
        </section>

        <section className="pv-section compact">
          <h2>What We’re Building (Public Scope)</h2>
          <ul className="tight">
            <li>Profile system with media showcase capabilities.</li>
            <li>Advanced search and filtering functionality.</li>
            <li>Innovative content matching features (details under development).</li>
          </ul>
        </section>

        <section className="pv-section compact">
          <h2>Current Focus</h2>
          <ul className="tight">
            <li>Interactive prototypes of key user flows.</li>
            <li>Private testing with select early users.</li>
            <li>Core trust and safety infrastructure.</li>
          </ul>
        </section>

        <section className="pv-section compact">
          <h2>AI Orchestrator</h2>
          <p>
            Project Valine uses an AI orchestrator for GitHub and Discord integrations. The orchestrator
            has been consolidated into the <a href="https://github.com/gcolon75/ghawk75-ai-agent" target="_blank" rel="noreferrer">ghawk75-ai-agent</a> repository.
          </p>
          <p>
            For orchestrator documentation, deployment guides, and integration details, see <a href="https://github.com/gcolon75/Ghawk75.Portfolio/blob/main/docs/ORCHESTRATOR.md" target="_blank" rel="noreferrer">ORCHESTRATOR.md</a>.
          </p>
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
