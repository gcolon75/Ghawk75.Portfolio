import React from 'react';
import './Hero.css';
import SEO, { getPersonStructuredData } from './SEO';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
        </div>
      </section>
    </>
  );
}

export default Hero;