import React, { useState } from 'react';
import './SkillTree.css';

function SkillTree() {
    const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);

    const planets = [
        { name: "Game", description: "Exploring gaming concepts and design." },
        { name: "Coding", description: "Expanding coding knowledge and skills." },
        { name: "UX", description: "Focusing on UX design principles and user experience." },
        { name: "Cognitive Science", description: "Creating visually engaging designs and prototypes." },
        { name: "Development", description: "Building projects using development frameworks." },
        { name: "Design", description: "Placeholder for AI concepts." },
        { name: "Neuroscience", description: "Placeholder for animation techniques." },
        { name: "Research", description: "Placeholder for virtual reality projects." },
        { name: "Project Management", description: "Placeholder for web development projects." },
        { name: "HCI", description: "Placeholder for mobile app development." },
    ];

    return (
        <div className="skill-tree-section">
            <h2>My Skill Tree</h2>
            <div className="skill-container">
                {planets.map((planet, index) => (
                    <React.Fragment key={index}>
                        {/* Planet */}
                        <div
                            className={`orbit-planet orbit-${index} ${
                                selectedPlanetIndex === index ? 'selected' : ''
                            }`}
                            onClick={() => setSelectedPlanetIndex(index)}
                        >
                            {planet.name}
                        </div>

                        {/* Connection Line */}
                        {index < planets.length - 1 && (
                            <div className={`connection-line line-${index}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Description Box */}
            {selectedPlanetIndex !== null && (
                <div className="description-box">
                    <h3>{planets[selectedPlanetIndex].name}</h3>
                    <p>{planets[selectedPlanetIndex].description}</p>
                </div>
            )}
        </div>
    );
}

export default SkillTree;