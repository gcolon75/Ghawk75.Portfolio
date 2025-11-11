import React, { useState, useEffect } from 'react';
import './Hero.css';
import SEO, { getPersonStructuredData } from './SEO';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  const personData = getPersonStructuredData();
  const [orbitsPaused, setOrbitsPaused] = useState(false);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setOrbitsPaused(true);
    }
    
    // Load orbit pause state from localStorage if not reduced motion
    if (!mediaQuery.matches) {
      const savedState = localStorage.getItem('orbits-paused');
      if (savedState === 'true') {
        setOrbitsPaused(true);
      }
    }
  }, []);

  // Save orbit pause state to localStorage
  const toggleOrbits = () => {
    const newState = !orbitsPaused;
    setOrbitsPaused(newState);
    localStorage.setItem('orbits-paused', newState.toString());
  };

  return (
    <>
      <SEO
        title="Gabriel Colon - Systems Designer & Game Designer"
        description="Portfolio of Gabriel Colon, a Systems Designer and Game Designer focused on Performance Optimization, Game Mechanics, and Player-Centric Design."
        url="/"
        structuredData={personData}
      />
      
      <section className="hero-container">
        <div className="hero-content">
          <h1>Gabriel Colón</h1>
          <p className="hero-subtitle">
            Systems Designer & Game Designer
          </p>
          
          {/* Social Buttons */}
          <div className="hero-social">
            <a 
              href="https://www.linkedin.com/in/gabriel-colon-3b4487253/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/gcolon75" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>

          {/* Orbit Control Toggle */}
          <button
            className="orbit-toggle"
            onClick={toggleOrbits}
            aria-label={orbitsPaused ? 'Resume orbits animation' : 'Pause orbits animation'}
            aria-pressed={orbitsPaused}
          >
            {orbitsPaused ? '▶' : '⏸'} Pause Orbits
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;