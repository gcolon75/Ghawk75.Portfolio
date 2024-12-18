import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: "Spotify Redesign", description: "Redesign Writeup", link: "#" },
    { title: "Project 2", description: "Ex.", link: "#" },
    { title: "Project 3", description: "Ex.", link: "#" },
    { title: "Project 4", description: "Ex.", link: "#" },
  ];

  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View</a>
        </div>
      ))}
    </section>
  );
}