// Journey.js
import React, { useState } from 'react';
import './Journey.css';

const milestones = [
  { title: "Level 1: High School Explorer", description: "My high school interests.", icon: "🏫" },
  { title: "Level 2: Collegiate Adventurer", description: "My journey at UCSD, diving into Cognitive Science and Design.", icon: "🎓" },
  { title: "Level 3: Aspiring Pro", description: "Developing real-world skills through leadership, coding, and UX design.", icon: "💼" },
  { title: "Level 4: Career Milestone (Locked)", description: "Future professional growth as I pursue my career.", icon: "🔒" }
];

function Journey() {
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleNext = () => {
    if (currentLevel < milestones.length - 1) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const handlePrev = () => {
    if (currentLevel > 0) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  return (
    <section id="journey" className="journey">
      <h2>My Journey</h2>
      <div className="journey-card">
        <span className="journey-icon">{milestones[currentLevel].icon}</span>
        <h3>{milestones[currentLevel].title}</h3>
        <p>{milestones[currentLevel].description}</p>
        <div className="journey-buttons">
          <button onClick={handlePrev} disabled={currentLevel === 0}>⬅️ Previous</button>
          <button onClick={handleNext} disabled={currentLevel === milestones.length - 1}>Next ➡️</button>
        </div>
      </div>
    </section>
  );
}

export default Journey;