import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';

function Projects() {
  const [filter, setFilter] = useState({ type: 'all', tech: 'all' });
  const projects = projectData.projects;
  
  // Extract unique types and technologies for filters
  const projectTypes = ['all', ...new Set(projects.map(p => p.type))];
  const allTechStack = new Set();
  projects.forEach(p => {
    p.techStack.forEach(tech => allTechStack.add(tech));
  });
  const techOptions = ['all', ...Array.from(allTechStack).sort()];
  
  // Filter projects
  const filteredProjects = projects.filter(project => {
    const typeMatch = filter.type === 'all' || project.type === filter.type;
    const techMatch = filter.tech === 'all' || project.techStack.includes(filter.tech);
    return typeMatch && techMatch;
  });

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      
      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="type-filter">Type:</label>
          <select 
            id="type-filter"
            value={filter.type} 
            onChange={(e) => setFilter({...filter, type: e.target.value})}
            className="filter-select"
          >
            {projectTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="tech-filter">Technology:</label>
          <select 
            id="tech-filter"
            value={filter.tech} 
            onChange={(e) => setFilter({...filter, tech: e.target.value})}
            className="filter-select"
          >
            {techOptions.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
        
        {(filter.type !== 'all' || filter.tech !== 'all') && (
          <button 
            onClick={() => setFilter({ type: 'all', tech: 'all' })}
            className="clear-filters"
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${project.phase ? 'in-progress' : ''} ${project.featured ? 'featured' : ''}`}
          >
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            
            {/* Tech Stack Tags */}
            <div className="tech-tags">
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
              {project.techStack.length > 4 && (
                <span className="tag more-tags">+{project.techStack.length - 4}</span>
              )}
            </div>

            {project.phase ? (
              <div className="project-status">
                <span className="progress-badge">
                  {project.phase} <span role="img" aria-label="rocket">🚀</span>
                </span>
                <Link to={project.internalLink} className="project-link">
                  View Details
                </Link>
              </div>
            ) : (
              <Link to={project.internalLink} className="project-link">
                View Project
              </Link>
            )}
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <p className="no-results">No projects found matching your filters.</p>
      )}
    </section>
  );
}

export default Projects;
