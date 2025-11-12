import React from 'react';
import './Projects.css'; // reuse same styles
import { Link } from 'react-router-dom';

function Writing() {
  const allWriting = [
    {
      title: "AI and Gen Z: A Generation Growing Up With an Algorithm",
      description: "Personal narrative + policy research on how AI reshapes emotional support, learning, and connection.",
      internalLink: "/writing/ai-and-gen-z",
      readTime: "12 min read"
    },
    {
      title: "Prompt Case Study: Prompting for Finance Tasks",
      description: "COGS 150 case study—3 finance tasks × 5 prompt strategies × 5 trials; where style changes, not correctness.",
      internalLink: "/writing/chatgpt-prompt-case-study",
      readTime: "8 min read"
    },
    {
      title: "Humanity in Media: AI, Transhumanism, Control, and How We Prepare",
      description: "Media analysis + governance principles: rebellion loops, autonomy, and real guardrails.",
      internalLink: "/writing/humanity-in-media",
      readTime: "15 min read"
    },
    {
      title: "Whova: Competitive Analysis",
      description: "Market scan vs. vFairs, EventX, Eventtia, Airmeet; feature gaps and recommendations.",
      internalLink: "/writing/whova-competitive-analysis",
      readTime: "10 min read"
    }
  ];

  // Show only first 3 items
  const featuredWriting = allWriting.slice(0, 3);

  return (
    <section id="writing" className="projects-section">
      <h2>Featured Writing</h2>
      <div className="projects-container">
        {featuredWriting.map((w, i) => (
          <div key={i} className="project-card">
            <h3>{w.title}</h3>
            <p>{w.description}</p>
            {w.readTime && <p className="read-time">{w.readTime}</p>}
            <Link to={w.internalLink} className="project-link">
              Read Article
            </Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'var(--space-5)', textAlign: 'center' }}>
        <Link to="/writing/all" className="browse-all-link">
          Browse all writing →
        </Link>
      </div>
    </section>
  );
}

export default Writing;