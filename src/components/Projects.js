import React from 'react';
import './Projects.css';
import projectData from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = projectData.projects;

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
