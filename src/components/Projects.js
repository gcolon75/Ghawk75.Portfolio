import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: "Volleyball Mobile",
            description: "A UX/UI design concept for a volleyball app aimed at La Jolla Shores.",
            link: "https://docs.google.com/presentation/d/1lJ-Y6p10M3ivPvvfhBiTRQJaIojinK-lfXC_VAtoZPk/edit?usp=sharing"
        },
        {
            title: "Spotify Redesign",
            description: "A complete redesign concept for Spotify's mobile app with a focus on user experience.",
            link: "https://docs.google.com/document/d/1tqb9SHftXjbO5D9aDpiCTBFTdf0qve3nVeCdvgrYjcw/edit?usp=sharing"
        }
    ];

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;