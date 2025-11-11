import React from 'react';
import { Link } from 'react-router-dom';
import './ValueThemes.css';
import projectData from '../data/projects.json';

function ValueThemes() {
  // Define value themes with project mappings
  const themes = [
    {
      title: 'Systems Design & Architecture',
      icon: '🏗️',
      description: 'Building robust, scalable systems that handle complexity gracefully and support long-term growth.',
      projectIds: ['tower-of-greed', '3kingdoms', 'amadeus'],
      color: '#4CAF50'
    },
    {
      title: 'Player-Centric Game Mechanics',
      icon: '🎮',
      description: 'Crafting tactical gameplay systems that balance RNG with player agency and reward smart decision-making.',
      projectIds: ['tower-of-greed', '3kingdoms'],
      color: '#66fcf1'
    },
    {
      title: 'Performance & Developer Experience',
      icon: '⚡',
      description: 'Optimizing workflows, automating repetitive tasks, and shipping reliable tools that reduce friction.',
      projectIds: ['amadeus', 'project-valine'],
      color: '#ffd166'
    },
    {
      title: 'User Research & Accessible Design',
      icon: '🎨',
      description: 'Creating intuitive, inclusive experiences grounded in research, empathy, and accessibility-first principles.',
      projectIds: ['axle', 'goalee', 'volleyball', 'tritongoplus'],
      color: '#1db954'
    }
  ];

  const getProjects = (projectIds) => {
    return projectIds
      .map(id => projectData.projects.find(p => p.id === id))
      .filter(p => p);
  };

  return (
    <section className="value-themes-section">
      <h2>Value Themes</h2>
      <p className="themes-intro">
        My work centers around four core themes that drive impact and create value:
      </p>
      
      <div className="themes-grid">
        {themes.map((theme, index) => (
          <div key={index} className="theme-card" style={{ borderColor: theme.color }}>
            <div className="theme-icon" aria-hidden="true">{theme.icon}</div>
            <h3 style={{ color: theme.color }}>{theme.title}</h3>
            <p className="theme-description">{theme.description}</p>
            <div className="theme-projects">
              <strong>Representative Projects:</strong>
              <div className="project-links">
                {getProjects(theme.projectIds).map((project) => (
                  <Link 
                    key={project.id}
                    to={project.internalLink} 
                    className="theme-project-link"
                    style={{ '--link-color': theme.color }}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueThemes;
