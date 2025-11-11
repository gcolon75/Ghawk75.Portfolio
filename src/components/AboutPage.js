import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import SEO, { getPersonStructuredData } from './SEO';

function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const personData = getPersonStructuredData();

  return (
    <>
      <SEO
        title="About"
        description="Gabriel Colon is a Systems Designer and Engineer focused on Performance Optimization, Game Mechanics, and Player-Centric Design."
        url="/#/about"
        structuredData={personData}
      />
      
      <div className="App">
        <div className="content">
          <div className="about-page">
            <Header />

            <main id="main-content" className="about-content">
              {/* Positioning Summary */}
              <section className="positioning-section">
                <h1>About Me</h1>
                <p className="positioning-summary">
                  I'm a systems designer and engineer who transforms complex challenges into 
                  elegant, player-focused solutions. My work bridges <strong>Systems Design</strong>, 
                  <strong>Performance Optimization</strong>, and <strong>Game Mechanics</strong>—creating 
                  experiences that are reliable, accessible, and deeply engaging.
                </p>
              </section>

              {/* Principles */}
              <section className="principles-section">
                <h2>Principles</h2>
                <ul className="principles-list">
                  <li>
                    <strong>Clarity over complexity</strong> — Simple systems that scale beat 
                    clever hacks that break.
                  </li>
                  <li>
                    <strong>Player empathy</strong> — Design from the player's perspective, 
                    not just the technical constraints.
                  </li>
                  <li>
                    <strong>Evidence-driven iteration</strong> — Data and testing guide decisions, 
                    but intuition sparks innovation.
                  </li>
                  <li>
                    <strong>Reliability first</strong> — Performance, accessibility, and stability 
                    are features, not afterthoughts.
                  </li>
                  <li>
                    <strong>Accessibility by default</strong> — Inclusive design from the ground up, 
                    not bolted on later.
                  </li>
                  <li>
                    <strong>Systems thinking</strong> — Understanding how components interact is as 
                    important as optimizing individual parts.
                  </li>
                </ul>
              </section>

              {/* What I'm Exploring Now */}
              <section className="exploring-section">
                <h2>What I'm Exploring Now</h2>
                <p>
                  Currently diving deep into dice-driven roguelike systems and resource-gated mechanics 
                  that balance RNG with player agency. Also exploring modern web performance patterns 
                  and accessibility-first design systems.
                </p>
              </section>

              {/* Back Link */}
              <div className="inline-links">
                <Link to="/" className="back-link">← Back to Home</Link>
              </div>
            </main>

            <ContactFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
