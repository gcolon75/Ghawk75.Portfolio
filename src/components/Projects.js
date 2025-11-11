import React, { useState } from 'react';
import './Projects.css';
import projectData from '../data/projects.json';
import ProjectCard from './ProjectCard';

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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <p className="no-results">No projects found matching your filters.</p>
      )}
    </section>
  );
}

export default Projects;
