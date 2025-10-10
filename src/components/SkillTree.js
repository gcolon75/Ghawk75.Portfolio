import React, { useState } from 'react';
import './SkillTree.css';

function SkillTree() {
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);

  // 🔁 Updated content only — layout/positions untouched.
  const planets = [
    {
      name: "AI Agents",
      description: `Built “Desk Sentinel” — a Discord AI bot for prices, earnings, and watchlists.
Tech: Python, discord.py, REST, yfinance/Alpaca basics, prompt design.
Proof: <a href="https://github.com/gcolon75/ghawk75-ai-agent" target="_blank" rel="noreferrer">Repo</a>.
Focus: automate useful tasks, not hype.`
    },
    {
      name: "Product & Program Ops",
      description: `Roadmaps → scheduling → budgets → retros in Notion/Sheets.
Tritonthenix events & outreach led to +40% attendance YoY.
Focus: predictable delivery, clear updates, clean handoffs.`
    },
    {
      name: "UX Research & Design",
      description: `Interviews, surveys, IA, wireframes → Figma prototypes → usability tests.
Backed by stats/SPSS and HCI coursework for evidence-based decisions.`
    },
    {
      name: "HCI & CogSci",
      description: `B.S. Cognitive Science (Design & Interaction), minor in Computational Social Science.
Strengths: perception, decision-making, human-in-the-loop systems, accessibility.`
    },
    {
      name: "Frontend (React)",
      description: `Shipped this portfolio on GitHub Pages.
Comfortable with components, state, accessibility basics, and clean CSS.
Proof: <a href="https://gcolon75.github.io/Ghawk75.Portfolio" target="_blank" rel="noreferrer">Live site</a>.`
    },
    {
      name: "Data & Analytics",
      description: `Stats/SPSS, pandas, tidy dashboards, and experiment design.
Goal: recommend product moves with minimal but meaningful metrics.`
    },
    {
      name: "Game / Systems",
      description: `Tower of Greed: encounter design, risk–reward loops, balance spreadsheets.
Focus: tight feedback loops and readable UI for players.`
    },
    {
      name: "Research & Writing",
      description: `Cognitive science + AI/ethics essays and structured notes.
I turn exploratory research into decisions, not just docs.`
    },
    {
      name: "Project Management",
      description: `Agile habits (sprints, risk logs, stakeholder comms). Google PM cert in progress.
Comfortable owning timelines, scope, and trade-offs.`
    },
    {
      name: "Entrepreneurship",
      description: `Etsy shop hit #1 in category via SEO, pricing, and customer support.
Bias to ship, iterate, and measure outcomes.`
    }
  ];

  return (
    <div className="skill-tree-section">
      <h2>My Skill Tree</h2>

      <div className="skill-container">
        {planets.map((planet, index) => (
          <React.Fragment key={index}>
            {/* Planet Nodes (no position/dimension changes) */}
            <div
              className={`orbit-planet orbit-${index} ${selectedPlanetIndex === index ? 'selected' : ''}`}
              onClick={() => setSelectedPlanetIndex(index)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPlanetIndex(index)}
              role="button"
              tabIndex={0}
              aria-pressed={selectedPlanetIndex === index}
              aria-label={`Open ${planet.name} details`}
            >
              {planet.name}
            </div>

            {/* Connection Lines (unchanged behavior) */}
            {index < planets.length - 1 && (
              <div className={`connection-line line-${index}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Description Box */}
      {selectedPlanetIndex !== null && (() => {
        const planet = planets[selectedPlanetIndex];
        const description = planet.description;
        
        // Parse description to extract links safely
        const renderDescription = () => {
          // Split by link tags
          const parts = description.split(/(<a[^>]*>.*?<\/a>)/g);
          
          return parts.map((part, idx) => {
            // Check if this part is a link
            const linkMatch = part.match(/<a href="([^"]*)"[^>]*>(.*?)<\/a>/);
            if (linkMatch) {
              const [, url, text] = linkMatch;
              return (
                <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              );
            }
            // Otherwise, render text with line breaks
            return part.split('\n').map((line, lineIdx) => (
              <React.Fragment key={`${idx}-${lineIdx}`}>
                {line}
                {lineIdx < part.split('\n').length - 1 && <br />}
              </React.Fragment>
            ));
          });
        };

        return (
          <div className="description-box" aria-live="polite">
            <h3>{planet.name}</h3>
            <p>{renderDescription()}</p>
          </div>
        );
      })()}
    </div>
  );
}

export default SkillTree;
