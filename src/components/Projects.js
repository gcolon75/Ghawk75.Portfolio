import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: "axle: Mobile Mechanic App/Website Design",
            description: "A complete redesign concept for Spotify's mobile app with a focus on user experience.",
            link: "https://docs.google.com/presentation/d/14b8Es2WwV-2lSqeyjJYokhlfT65xDO2K/edit?usp=sharing&ouid=109196431552780940505&rtpof=true&sd=true"
        },
        {
            title: "Goalee: Startup Project Pitch",
            description: "A campus-based social app encouraging in-person interaction and events at UCSD.",
            link: "https://docs.google.com/presentation/d/1-r9TBUI4x7WzPsGiljHeOuw9V274GHv3/edit?usp=sharing&ouid=109196431552780940505&rtpof=true&sd=true"
        },
        {
            title: "Volleyball Mobile",
            description: "A UX/UI design concept for a volleyball app aimed at La Jolla Shores.",
            link: "https://docs.google.com/presentation/d/1lJ-Y6p10M3ivPvvfhBiTRQJaIojinK-lfXC_VAtoZPk/edit?usp=sharing"
        },
        {
            title: "TritonGo App",
            description: "A campus-based social app encouraging in-person interaction and events at UCSD.",
            link: "https://m5mendez.wixsite.com/triton-go-social"
        },
        {
            title: "3 Kingdoms Game",
            description: "An interactive game project inspired by fantasy worlds, currently in progress using React and Three.js.",
            link: "#",
            inProgress: true
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${project.inProgress ? 'in-progress' : ''}`}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.link !== "#" ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        ) : (
                            <span className="progress-badge">
                                In Progress <span role="img" aria-label="rocket">🚀</span>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;