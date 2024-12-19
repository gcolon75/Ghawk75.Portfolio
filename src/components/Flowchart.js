import React from 'react';
import './Flowchart.css';

function Flowchart() {
  const levels = [
    {
      title: "Level 1: High School Explorer",
      description: "Discovering my interests and hobbies in high school.",
      badge: "🏫",
    },
    {
      title: "Level 2: Collegiate Adventurer",
      description: "My journey through college and the lessons I learned.",
      badge: "🎓",
    },
    {
      title: "Level 3: Aspiring Pro",
      description: "Ready to graduate with skills and a vision for the future.",
      badge: "💼",
    },
    {
      title: "Level 4: First Career Milestone",
      description: "Locked until I land my first job.",
      badge: "🔒",
      locked: true,
    },
  ];

  return (
    <section className="flowchart">
      {levels.map((level, index) => (
        <div key={index} className={`flowchart-level ${level.locked ? "locked" : ""}`}>
          <div className="flowchart-badge">{level.badge}</div>
          <div className="flowchart-content">
            <h2>{level.title}</h2>
            <p>{level.description}</p>
          </div>
          {index < levels.length - 1 && <div className="flowchart-arrow">⬇️</div>}
        </div>
      ))}
    </section>
  );
}

export default Flowchart;