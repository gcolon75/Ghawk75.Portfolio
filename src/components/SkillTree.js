import React, { useState } from 'react';
import './SkillTree.css';

function SkillTree() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const planets = [
        { name: "Game", description: "Exploring gaming concepts and design." },
        { name: "Coding", description: "Expanding coding knowledge and skills." },
        { name: "UX", description: "Focusing on UX design principles and user experience." },
        { name: "Design", description: "Creating visually engaging designs and prototypes." },
        { name: "Development", description: "Building projects using development frameworks." }
    ];

    return (
        <section className="skill-tree">
            <h2>My Skill Tree</h2>
            <div className="skill-container">
                {/* Center Planet */}
                <div className="center-planet">Future</div>

                {/* Surrounding Planets (Static) */}
                <div className="orbit-planet orbit-0" onClick={() => setSelectedPlanet(planets[0])}>Game</div>
                <div className="orbit-planet orbit-1" onClick={() => setSelectedPlanet(planets[1])}>Coding</div>
                <div className="orbit-planet orbit-2" onClick={() => setSelectedPlanet(planets[2])}>UX</div>
                <div className="orbit-planet orbit-3" onClick={() => setSelectedPlanet(planets[3])}>Design</div>
                <div className="orbit-planet orbit-4" onClick={() => setSelectedPlanet(planets[4])}>Development</div>
            </div>

            {/* Selected Planet Description Box */}
            {selectedPlanet && (
                <div className="description-box">
                    <h3>{selectedPlanet.name}</h3>
                    <p>{selectedPlanet.description}</p>
                </div>
            )}
        </section>
    );
}

export default SkillTree;