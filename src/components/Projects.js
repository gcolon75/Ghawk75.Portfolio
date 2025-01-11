import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: "Spotify Redesign", description: "A modern redesign of Spotify’s UI.", link: "#" },
    { title: "Game Development Prototype", description: "A Unity-based platformer game.", link: "#" },
    { title: "TritonGo", description: "A campus-based social mobile game.", link: "#" },
    { title: "Volleyball Mobile", description: "A mobile app for volleyball game scheduling.", link: "#" },
    { title: "VR Health Screening", description: "A VR-based mental health screening system.", link: "#" },
    { title: "Ghawk's Space Adventure", description: "An interactive web-based space game.", link: "#" }
  ];

  return (
    <section className="projects">
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