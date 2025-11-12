import React, { useState } from 'react';
import './SkillTree.css';

function SkillTree() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    // Row 1
    { id: 0, name: "AI Agents", x: 100, y: 80, row: 1 },
    { id: 1, name: "UX & Research", x: 280, y: 80, row: 1 },
    { id: 2, name: "Frontend (React)", x: 460, y: 80, row: 1 },
    { id: 3, name: "Data & Analytics", x: 640, y: 80, row: 1 },
    // Row 2
    { id: 4, name: "Product & Program Ops", x: 100, y: 200, row: 2 },
    { id: 5, name: "HCI & CogSci", x: 280, y: 200, row: 2 },
    { id: 6, name: "Game / Systems", x: 460, y: 200, row: 2 },
    // Row 3
    { id: 7, name: "Project Management", x: 100, y: 320, row: 3 },
    { id: 8, name: "Entrepreneurship", x: 280, y: 320, row: 3 },
    { id: 9, name: "Research & Writing", x: 460, y: 320, row: 3 },
  ];

  const descriptions = {
    0: `Built "Desk Sentinel" — a Discord AI bot for prices, earnings, and watchlists.
Tech: Python, discord.py, REST, yfinance/Alpaca basics, prompt design.
Proof: <a href="https://github.com/gcolon75/ghawk75-ai-agent" target="_blank" rel="noreferrer">Repo</a>.
Focus: automate useful tasks, not hype.`,
    1: `Interviews, surveys, IA, wireframes → Figma prototypes → usability tests.
Backed by stats/SPSS and HCI coursework for evidence-based decisions.`,
    2: `Shipped this portfolio on GitHub Pages.
Comfortable with components, state, accessibility basics, and clean CSS.
Proof: <a href="https://gcolon75.github.io/Ghawk75.Portfolio" target="_blank" rel="noreferrer">Live site</a>.`,
    3: `Stats/SPSS, pandas, tidy dashboards, and experiment design.
Goal: recommend product moves with minimal but meaningful metrics.`,
    4: `Roadmaps → scheduling → budgets → retros in Notion/Sheets.
Tritonthenix events & outreach led to +40% attendance YoY.
Focus: predictable delivery, clear updates, clean handoffs.`,
    5: `B.S. Cognitive Science (Design & Interaction), minor in Computational Social Science.
Strengths: perception, decision-making, human-in-the-loop systems, accessibility.`,
    6: `Tower of Greed: encounter design, risk–reward loops, balance spreadsheets.
Focus: tight feedback loops and readable UI for players.`,
    7: `Agile habits (sprints, risk logs, stakeholder comms). Google PM cert in progress.
Comfortable owning timelines, scope, and trade-offs.`,
    8: `Etsy shop hit #1 in category via SEO, pricing, and customer support.
Bias to ship, iterate, and measure outcomes.`,
    9: `Cognitive science + AI/ethics essays and structured notes.
I turn exploratory research into decisions, not just docs.`,
  };

  // Connector lines: connect nodes in rows
  const connectors = [
    // Row 1 horizontal
    { x1: 100, y1: 80, x2: 280, y2: 80 },
    { x1: 280, y1: 80, x2: 460, y2: 80 },
    { x1: 460, y1: 80, x2: 640, y2: 80 },
    // Row 2 horizontal
    { x1: 100, y1: 200, x2: 280, y2: 200 },
    { x1: 280, y1: 200, x2: 460, y2: 200 },
    // Row 3 horizontal
    { x1: 100, y1: 320, x2: 280, y2: 320 },
    { x1: 280, y1: 320, x2: 460, y2: 320 },
    // Vertical connections
    { x1: 100, y1: 80, x2: 100, y2: 200 },
    { x1: 280, y1: 80, x2: 280, y2: 200 },
    { x1: 460, y1: 80, x2: 460, y2: 200 },
    { x1: 100, y1: 200, x2: 100, y2: 320 },
    { x1: 280, y1: 200, x2: 280, y2: 320 },
    { x1: 460, y1: 200, x2: 460, y2: 320 },
  ];

  return (
    <div className="skill-tree-section">
      <h2>My Skill Tree</h2>

      <div className="skill-tree-container">
        <svg
          className="skill-tree-svg"
          viewBox="0 0 740 400"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Skill tree diagram"
        >
          {/* Draw connector lines */}
          <g className="connectors">
            {connectors.map((line, i) => (
              <line
                key={`line-${i}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#0de3d6"
                strokeWidth="2"
                strokeOpacity="0.65"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Draw skill nodes */}
          <g className="nodes">
            {skills.map((skill) => (
              <g
                key={skill.id}
                className={`skill-node ${selectedSkill === skill.id ? 'selected' : ''}`}
                onClick={() => setSelectedSkill(skill.id)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedSkill(skill.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${skill.name} details`}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={skill.x}
                  cy={skill.y}
                  r="35"
                  fill="rgba(0, 0, 0, 0.9)"
                  stroke="#0de3d6"
                  strokeWidth="1.5"
                />
                <circle
                  cx={skill.x}
                  cy={skill.y}
                  r="32"
                  fill="rgba(13, 227, 214, 0.03)"
                  stroke="none"
                />
                <text
                  x={skill.x}
                  y={skill.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#0de3d6"
                  fontSize="11"
                  fontWeight="500"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {skill.name.split(' ').map((word, i) => (
                    <tspan key={i} x={skill.x} dy={i === 0 ? 0 : '1.1em'}>
                      {word}
                    </tspan>
                  ))}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Description Box */}
      {selectedSkill !== null && (
        <div className="description-box" aria-live="polite">
          <h3>{skills[selectedSkill].name}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: descriptions[selectedSkill].replace(/\n/g, '<br/>')
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SkillTree;
