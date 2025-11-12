import React from 'react';
import './Hero.css';
import SEO, { getPersonStructuredData } from './SEO';

function Hero() {
  const personData = getPersonStructuredData();

  return (
    <>
      <SEO
        title="Gabriel Colon - Systems Designer & Game Designer"
        description="Portfolio of Gabriel Colon, a Systems Designer and Game Designer focused on Performance Optimization, Game Mechanics, and Player-Centric Design."
        url="/"
        structuredData={personData}
      />
      
      <section className="hero-container">
        <div className="hero-content container">
          <h1 className="hero-name">Gabriel Colón</h1>
          <p className="hero-tagline">
            Building user‑centered products & AI‑assisted workflows.
          </p>
          
          <div className="hero-cta-row">
            <a href="#projects" className="hero-btn">View Projects</a>
            <a href="#writing" className="hero-btn">Read Writing</a>
            <a 
              href="/Ghawk75.Portfolio/resume.pdf" 
              className="hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;