import React, { useState } from 'react';
import './AboutSkillTree.css';

function AboutSkillTree() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const planets = [
        { name: "Game", description: "Exploring gaming concepts and design." },
        { name: "Coding", description: "Expanding coding knowledge and skills." },
        { name: "UX", description: "Focusing on UX design principles and user experience." },
        { name: "Design", description: "Creating visually engaging designs and prototypes." },
        { name: "Development", description: "Building projects using development frameworks." },
        // ✅ Added Missing Planets as Placeholders
        { name: "AI", description: "Placeholder for AI concepts." },
        { name: "Animation", description: "Placeholder for animation techniques." },
        { name: "VR", description: "Placeholder for virtual reality projects." },
        { name: "Web", description: "Placeholder for web development projects." },
        { name: "Mobile", description: "Placeholder for mobile app development." }
    ];

    return (
        <div className="about-skill-container side-by-side">
            {/* About Me Section (Unchanged) */}
            <div className="about-skill-tree">
                <h2>About Me</h2>
                <p>
                    Hi, I'm Gabriel Colon, a Cognitive Science major specializing in Human Interaction and Design, 
                    with a minor in Computational Social Science from UC San Diego. I'm passionate about the intersection 
                    of technology, design, and human behavior, with skills spanning project management, coding 
                    (Java, Python, Data Structures), and user experience design.
                </p>
                <p>
                    As the Social Chair of the Tritonthenix Calisthenics Club, I've honed skills in event planning, 
                    leadership, and teamwork while also expanding my technical abilities through coursework in HCI, 
                    data-driven UX design, and cognitive neuroscience.
                </p>
                <p>
                    I'm always striving to combine my technical expertise with creative design, hoping to build 
                    products and experiences that inspire and empower others.
                </p>
            </div>

            {/* Skill Tree Section (Unchanged) */}
            <div className="about-skill-tree skill-tree-section">
                <h2>My Skill Tree</h2>
                <div className="skill-container">
                    {/* Center Planet (Future) */}
                    <div className="center-planet">Future</div>

                    {/* Surrounding Static Planets (Now Includes All 10 Planets) */}
                    {planets.map((planet, index) => (
                        <div 
                            key={index} 
                            className={`orbit-planet orbit-${index}`} 
                            onClick={() => setSelectedPlanet(planet)}
                        >
                            {planet.name}
                        </div>
                    ))}
                </div>

                {/* Selected Planet Description Box */}
                {selectedPlanet && (
                    <div className="description-box">
                        <h3>{selectedPlanet.name}</h3>
                        <p>{selectedPlanet.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AboutSkillTree;