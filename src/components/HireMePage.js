import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HireMePage.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import SEO from './SEO';
import projectData from '../data/projects.json';

function HireMePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Map value themes to projects
  const valueThemes = [
    {
      title: 'Scalable Systems Design',
      description: 'Building robust architectures that handle complexity and growth gracefully.',
      projects: ['tower-of-greed', '3kingdoms', 'amadeus']
    },
    {
      title: 'Dice & Combat Mechanics',
      description: 'Crafting tactical, player-driven gameplay systems that balance RNG with agency.',
      projects: ['tower-of-greed', '3kingdoms']
    },
    {
      title: 'Performance & Developer Experience',
      description: 'Optimizing workflows, reducing friction, and shipping reliable automation.',
      projects: ['amadeus', 'project-valine']
    },
    {
      title: 'User-Centric Design',
      description: 'Creating accessible, intuitive experiences grounded in research and empathy.',
      projects: ['axle', 'goalee', 'volleyball', 'tritongoplus']
    }
  ];

  return (
    <>
      <SEO
        title="Hire Me"
        description="Discover how Gabriel Colon can add value to your team through Systems Design, Game Mechanics, Performance Optimization, and User Experience."
        url="/#/hire-me"
      />
      
      <div className="App">
        <div className="content">
          <div className="hire-me-page">
            <Header />

            <main id="main-content" className="hire-me-content">
              {/* Header */}
              <section className="hire-header-section">
                <h1>Let's Build Something Great</h1>
                <p className="hire-tagline">
                  I transform complex challenges into elegant, player-focused solutions through 
                  systems design, performance optimization, and thoughtful mechanics.
                </p>
              </section>

              {/* Ways I Add Value */}
              <section className="value-section">
                <h2>Ways I Add Value</h2>
                <div className="value-themes">
                  {valueThemes.map((theme, index) => (
                    <div key={index} className="value-theme-card">
                      <h3>{theme.title}</h3>
                      <p>{theme.description}</p>
                      <div className="theme-projects">
                        <strong>Examples:</strong>
                        {theme.projects.map((projectId, idx) => {
                          const project = projectData.projects.find(p => p.id === projectId);
                          return project ? (
                            <span key={projectId}>
                              {idx > 0 && ', '}
                              <Link 
                                to={project.internalLink} 
                                className="project-link"
                              >
                                {project.title}
                              </Link>
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTAs */}
              <section className="cta-section">
                <h2>Ready to Connect?</h2>
                <div className="cta-grid">
                  <div className="cta-card">
                    <h3>📅 Schedule a Call</h3>
                    <p>Let's discuss your project and how I can help.</p>
                    <a 
                      href="mailto:gcolon@ucsd.edu?subject=Portfolio%20Inquiry" 
                      className="cta-button primary"
                      aria-label="Schedule a call via email"
                    >
                      Get in Touch
                    </a>
                    <p className="cta-note">Calendar link coming soon</p>
                  </div>

                  <div className="cta-card">
                    <h3>📄 Request Résumé</h3>
                    <p>Get a detailed overview of my experience and skills.</p>
                    <a 
                      href="mailto:gcolon@ucsd.edu?subject=Resume%20Request" 
                      className="cta-button secondary"
                      aria-label="Request PDF résumé via email"
                    >
                      Request PDF
                    </a>
                  </div>

                  <div className="cta-card">
                    <h3>📦 Download Project Pack</h3>
                    <p>Explore curated project summaries and case studies.</p>
                    <a 
                      href="/#/projects" 
                      className="cta-button secondary"
                      aria-label="View projects page for detailed summaries"
                    >
                      Browse Projects
                    </a>
                    <p className="cta-note">Summary pack generation coming soon</p>
                  </div>
                </div>
              </section>

              {/* Contact Links */}
              <section className="contact-links-section">
                <h2>Find Me Online</h2>
                <div className="contact-links">
                  <a 
                    href="https://github.com/gcolon75" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Visit my GitHub profile (opens in new tab)"
                  >
                    <span className="link-icon">🔗</span> GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/gabrielcolon75/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Visit my LinkedIn profile (opens in new tab)"
                  >
                    <span className="link-icon">🔗</span> LinkedIn
                  </a>
                  <a 
                    href="mailto:gcolon@ucsd.edu" 
                    className="contact-link"
                    aria-label="Send me an email"
                  >
                    <span className="link-icon">📧</span> Email
                  </a>
                </div>
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

export default HireMePage;
