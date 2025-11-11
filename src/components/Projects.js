import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';
import projectData from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  const location = useLocation();
  const [filter, setFilter] = useState({ type: 'all', tech: 'all' });
  const projects = projectData.projects;
  
  // Handle URL query parameters for tag filtering
  useEffect(() => {
    const params = new URLSearchParams(location.search || location.hash.split('?')[1]);
    const tagsParam = params.get('tags');
    if (tagsParam) {
      const tags = tagsParam.split(',');
      // Filter will be applied automatically through filteredProjects
      setFilter({ type: 'all', tech: 'all', tags });
    }
  }, [location]);
  
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
    
    // Tag-based filtering from URL params
    let tagMatch = true;
    if (filter.tags && filter.tags.length > 0) {
      tagMatch = filter.tags.some(tag => {
        return project.techStack.includes(tag) ||
               (project.tags?.disciplines && project.tags.disciplines.includes(tag)) ||
               (project.tags?.specialties && project.tags.specialties.includes(tag)) ||
               (project.tags?.genres && project.tags.genres.includes(tag));
      });
    }
    
    return typeMatch && techMatch && tagMatch;
  });

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      
      {filter.tags && filter.tags.length > 0 && (
        <div className="active-tag-filter">
          Showing projects related to: <strong>{filter.tags.join(', ')}</strong>
          <button 
            onClick={() => setFilter({ type: 'all', tech: 'all' })}
            className="clear-tag-filter"
            aria-label="Clear tag filter"
          >
            ✕
          </button>
        </div>
      )}
      
      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="type-filter">Type:</label>
          <select 
            id="type-filter"
            value={filter.type} 
            onChange={(e) => setFilter({...filter, type: e.target.value, tags: undefined})}
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
            onChange={(e) => setFilter({...filter, tech: e.target.value, tags: undefined})}
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
