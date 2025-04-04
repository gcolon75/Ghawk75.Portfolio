import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-circle">
        <h1 className="hero-title">Gabriel Colón</h1>
        <p className="hero-text">
          Exploring creativity, design, and the infinite possibilities of the universe through code and storytelling.
        </p>
        <div className="hero-buttons">
          <button className="chat-button" onClick={() => scrollToSection('contact')}>Contact Me</button>
          <button className="explore-button" onClick={() => scrollToSection('projects')}>Explore my Projects</button>
        </div>
      </div>

      <div className="hero-stats-circle">
        <div className="hero-stat">
          <h2>100%</h2>
          <p>Committed to Problem Solving</p>
        </div>
        <div className="hero-stat">
          <h2>∞</h2>
          <p>Problems to Solve</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;