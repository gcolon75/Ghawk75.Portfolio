import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: "Spotify Redesign", description: "A modern redesign of Spotify's UI.", link: "#" },
    { title: "Game Development Prototype", description: "Unity-based platformer game prototype.", link: "#" },
    { title: "Portfolio Website", description: "Personal portfolio built with React and CSS.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;