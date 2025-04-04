import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom'; // 🔥 Use React Router Link for internal navigation

function Projects() {
    const projects = [
        {
            title: "axle: Mobile Mechanic App/Website Design",
            description: "A complete redesign concept for a mobile mechanic app with a focus on user experience.",
            internalLink: "/projects/axle"
        },
        {
            title: "Goalee: Startup Project Pitch",
            description: "A campus-based social app encouraging in-person interaction and events at UCSD.",
            internalLink: "/projects/goalee"
        },
        {
            title: "Volleyball Mobile",
            description: "A UX/UI design concept for a volleyball app aimed at La Jolla Shores.",
            internalLink: "/projects/volleyball"
        },
        {
            title: "TritonGo App",
            description: "A campus-based social app encouraging in-person interaction and events at UCSD.",
            internalLink: "/projects/tritongoplus"
        },
        {
            title: "3 Kingdoms Game",
            description: "An interactive game project inspired by fantasy worlds, currently in progress using React and Three.js.",
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
                        {project.inProgress ? (
                            <span className="progress-badge">
                                In Progress <span role="img" aria-label="rocket">🚀</span>
                            </span>
                        ) : (
                            <Link to={project.internalLink} className="project-link">
                                View Project
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;