import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
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
        <div className="hero-inner">
          {/* 🌍 Planet */}
          <div className="planet">
            <h1>Gabriel Colón</h1>
            <p>
              Exploring creativity, design, and the infinite possibilities of the
              universe through code and storytelling.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="hero-btn">Contact Me</a>
              <Link to="#projects" className="hero-btn">Explore my Projects</Link>
            </div>
          </div>

          {/* 🌕 Moon */}
          <div className="moon">
            <h2>100%</h2>
            <p>Committed to Problem Solving</p>
            <h2>∞</h2>
            <span>Problems to Solve</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;