import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import SEO, { getPersonStructuredData } from './SEO';
import planetsData from '../data/hero.planets.json';

function Hero() {
  const personData = getPersonStructuredData();
  const navigate = useNavigate();
  const [orbitsPaused, setOrbitsPaused] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);

  // Load orbit pause state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('orbits-paused');
    if (savedState === 'true') {
      setOrbitsPaused(true);
    }
  }, []);

  // Save orbit pause state to localStorage
  const toggleOrbits = () => {
    const newState = !orbitsPaused;
    setOrbitsPaused(newState);
    localStorage.setItem('orbits-paused', newState.toString());
  };

  // Handle planet click - navigate to projects with filter
  const handlePlanetClick = (planet) => {
    const tagQuery = planet.tagFilter.join(',');
    navigate(`/#projects?tags=${encodeURIComponent(tagQuery)}`);
  };

  // Handle planet keyboard interaction
  const handlePlanetKeyPress = (e, planet) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlanetClick(planet);
    } else if (e.key === 'Escape') {
      setActivePlanet(null);
    }
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
        <div className="hero-inner">
          {/* Central Star - Name */}
          <div className="hero-star">
            <h1>Gabriel Colón</h1>
            <p className="hero-tagline">
              Systems Designer & Game Designer
            </p>
          </div>

          {/* Orbital System */}
          <div className={`orbital-system ${orbitsPaused ? 'paused' : ''}`} aria-label="Focus areas">
            {planetsData.planets.map((planet, index) => (
              <div 
                key={planet.id}
                className="orbit-container"
                style={{
                  '--orbit-radius': `${planet.radius}px`,
                  '--orbit-duration': `${planet.orbitDuration}s`,
                  '--orbit-delay': `${index * -5}s`
                }}
              >
                <button
                  className="orbit-planet"
                  style={{ '--planet-color': planet.color }}
                  onClick={() => handlePlanetClick(planet)}
                  onKeyDown={(e) => handlePlanetKeyPress(e, planet)}
                  onFocus={() => setActivePlanet(planet.id)}
                  onBlur={() => setActivePlanet(null)}
                  onMouseEnter={() => setActivePlanet(planet.id)}
                  onMouseLeave={() => setActivePlanet(null)}
                  aria-label={planet.ariaLabel}
                  aria-expanded={activePlanet === planet.id}
                >
                  <span className="planet-label">{planet.label}</span>
                  {activePlanet === planet.id && (
                    <span className="planet-tooltip" role="tooltip">
                      Click to view {planet.label} projects
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Orbit Control Toggle */}
          <button
            className="orbit-toggle"
            onClick={toggleOrbits}
            aria-label={orbitsPaused ? 'Resume orbits animation' : 'Pause orbits animation'}
            aria-pressed={orbitsPaused}
          >
            {orbitsPaused ? '▶ Resume' : '⏸ Pause'} Orbits
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;