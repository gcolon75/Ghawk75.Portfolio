import React, { useState } from 'react';
import './Flowchart.css';

function Flowchart() {
  const levels = [
    { title: 'High School Explorer', description: 'My high school interests.', badge: '🏫' },
    { title: 'Collegiate Adventurer', description: 'My college journey.', badge: '🎓' },
    { title: 'Aspiring Pro', description: 'Ready to graduate.', badge: '💼' },
    { title: 'First Career Milestone', description: 'Locked until my first job.', badge: '🔒', locked: true },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < levels.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="flowchart" className="flowchart">
      <h2>My Journey</h2>
      <div className="flowchart-container">
        <button
          className="flowchart-nav flowchart-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <div className="flowchart-level">
          <div className="flowchart-badge">{levels[currentIndex].badge}</div>
          <div className="flowchart-content">
            <h3>{levels[currentIndex].title}</h3>
            <p>{levels[currentIndex].description}</p>
          </div>
        </div>
        <button
          className="flowchart-nav flowchart-next"
          onClick={handleNext}
          disabled={currentIndex === levels.length - 1}
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default Flowchart;