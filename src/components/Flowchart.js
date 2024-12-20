import React from 'react';
import './Flowchart.css';

function Flowchart() {
  const levels = [
    { title: "High School Explorer", description: "My high school interests.", badge: "🏫" },
    { title: "Collegiate Adventurer", description: "My college journey.", badge: "🎓" },
    { title: "Aspiring Pro", description: "Ready to graduate.", badge: "💼" },
    { title: "First Career Milestone", description: "Locked until my first job.", badge: "🔒", locked: true },
  ];

  return (
    <section id="flowchart" className="flowchart">
      {levels.map((level, index) => (
        <div key={index} className={`flowchart-level ${level.locked ? 'locked' : ''}`}>
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