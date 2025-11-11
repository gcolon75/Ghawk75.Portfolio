import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Project7Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import SEO, { getProjectStructuredData } from './SEO';
import ProjectMeta from './ProjectMeta';
import projectData from '../data/projects.json';

import hero from '../assets/tower-of-greed-hero.jpg';

function Project7_TowerOfGreedPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [caseStudyExpanded, setCaseStudyExpanded] = useState(false);

  const PHASE = 'Concept / Design';
  const LAST_UPDATED = 'November 10, 2025';
  const PROGRESS = 0.20; // 20% — concept phase

  // Get project data for JSON-LD
  const project = projectData.projects.find(p => p.id === 'tower-of-greed');
  const structuredData = project ? getProjectStructuredData(project) : null;

  return (
    <>
      {structuredData && (
        <SEO
          title="Tower of Greed - Dice-Driven Roguelike RPG"
          description="A dice-driven roguelike RPG where every turn balances risk and payoff. Build your dice, manage resources, and climb using smart sequencing over raw RNG."
          url="/projects/tower-of-greed"
          structuredData={structuredData}
          project={project}
        />
      )}
      
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

            <ProjectMeta
              role={project?.role}
              skills={project?.tags?.disciplines}
              concepts={project?.tags?.specialties}
              tools={project?.tags?.tools}
            />

            <div className="hero-media">
              <img src={hero} alt="Tower of Greed concept" className="project-img" />
              <div className="wip-watermark" aria-hidden="true">CONCEPT</div>
            </div>

            {/* Meta chips */}
            <div className="meta-chips">
              <span className="chip">Phase: {PHASE}</span>
              <span className="chip">Last updated: {LAST_UPDATED}</span>
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

        {/* Expanded Case Study */}
        <section className="pv-section compact case-study-section">
          <div className="case-study-header">
            <h2>Expanded Case Study</h2>
            <button 
              className="expand-toggle"
              onClick={() => setCaseStudyExpanded(!caseStudyExpanded)}
              aria-expanded={caseStudyExpanded}
              aria-label={caseStudyExpanded ? "Collapse case study" : "Expand case study"}
            >
              {caseStudyExpanded ? '− Collapse' : '+ Expand'}
            </button>
          </div>
          
          {caseStudyExpanded && (
            <div className="case-study-content">
              <div className="case-study-subsection">
                <h3>Problem & Constraints</h3>
                <p>
                  <strong>Business/Player Goals:</strong> Create a roguelike that rewards player skill and 
                  decision-making rather than pure luck. The game needed to feel accessible to new players 
                  while offering deep tactical depth for experienced roguelike fans.
                </p>
                <p>
                  <strong>Constraints:</strong> Limited to solo concept development with no programming 
                  resources. Needed to design systems that were mathematically balanced on paper and could 
                  scale without extensive simulation tools. The dice mechanics had to be intuitive enough 
                  to explain in a single page while supporting complex strategic interactions.
                </p>
              </div>

              <div className="case-study-subsection">
                <h3>Approach & Trade-offs</h3>
                <p>
                  I chose to center the entire game around two dice types: a customizable Attack Die and 
                  a resource-gated Subclass Die. This dual-die system allowed for:
                </p>
                <ul className="tight">
                  <li>Consistent baseline damage (Attack Die) that players could reliably plan around</li>
                  <li>Burst potential (Subclass Die) that rewards setup and timing</li>
                  <li>Clear upgrade paths through Dice Shards and Ascension systems</li>
                </ul>
                <p>
                  <strong>What was deprioritized:</strong> Complex enemy AI and branching story paths were 
                  set aside to focus purely on combat mechanics and dice customization. The concept prioritizes 
                  mechanical depth over narrative complexity, accepting that story elements would be minimal.
                </p>
              </div>

              <div className="case-study-subsection">
                <h3>Decision Spotlight: Resource-Gated Subclass Die</h3>
                <p>
                  The most complex design decision was how to balance the Subclass Die's power. Early iterations 
                  used cooldown timers, but this felt arbitrary and reduced player agency.
                </p>
                <p>
                  <strong>The solution:</strong> Each subclass generates a unique resource (Blood for Vampire, 
                  Grit for Warrior, Edge for Rogue) through specific combat actions. The Subclass Die can only 
                  be used when sufficient resource is accumulated, typically every 3-4 turns.
                </p>
                <p>
                  <strong>Why this works:</strong> Players can accelerate or delay their burst turns through 
                  tactical play. A Vampire might deliberately take damage to generate Blood faster, while a 
                  Warrior builds Grit through consecutive attacks. This transforms the Subclass Die from a 
                  simple cooldown into a tactical resource management puzzle.
                </p>
                <p>
                  <strong>Rationale:</strong> This approach preserves player agency while maintaining balance. 
                  Skilled players can optimize resource generation, while the cap prevents runaway power scaling. 
                  It also creates distinct subclass identities based on how resources are earned and spent.
                </p>
              </div>

              <div className="case-study-subsection">
                <h3>Outcome</h3>
                <p>
                  The concept successfully demonstrates a roguelike system where player skill matters more 
                  than RNG. Early feedback from the concept documents highlighted:
                </p>
                <ul className="tight">
                  <li>Clear differentiation between subclasses through resource systems</li>
                  <li>Meaningful progression via dice customization and Ascension</li>
                  <li>Tactical depth from managing setup vs. burst timing</li>
                </ul>
                <p>
                  The design achieved the goal of "smart sequencing over raw RNG" while maintaining roguelike 
                  unpredictability through enemy encounters and upgrade choices.
                </p>
              </div>

              <div className="case-study-subsection">
                <h3>Reflection: What I'd Evolve Next</h3>
                <p>
                  With more development time, I would:
                </p>
                <ul className="tight">
                  <li>
                    <strong>Add synergy systems:</strong> Certain Attack Die shards could interact with 
                    Subclass Die abilities, creating build variety.
                  </li>
                  <li>
                    <strong>Test enemy design:</strong> The combat loop needs validation against diverse 
                    enemy types to ensure the resource systems remain engaging across difficulty levels.
                  </li>
                  <li>
                    <strong>Prototype digitally:</strong> A simple playable build would quickly surface 
                    balance issues and feel problems that paper design can't capture.
                  </li>
                  <li>
                    <strong>Explore asymmetry:</strong> Give each subclass a unique mechanic beyond resource 
                    generation (e.g., Vampires might have life drain, Rogues could have evasion).
                  </li>
                </ul>
                <p>
                  The core dice system is solid, but the game would benefit from more emergent complexity 
                  through synergies and environmental interactions. The next phase would focus on prototyping 
                  to validate the feel of resource management and dice customization in practice.
                </p>
              </div>
            </div>
          )}
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
    </>
  );
}

export default Project7_TowerOfGreedPage;
