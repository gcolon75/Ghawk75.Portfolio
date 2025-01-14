import React, { useState } from 'react';
import './SkillTree.css';

const planets = [
    { name: "Game", description: "Exploring gaming concepts and design." },
    { name: "Coding", description: "Full-stack development and technical skills." },
    { name: "Design", description: "UX/UI design and creative storytelling." },
    { name: "UX", description: "Research, cognitive studies, and usability." },
    { name: "Development", description: "Project planning and prototyping." },
    { name: "Research", description: "Data-driven research and analysis." }
];

const SkillTree = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
    };

    return (
        <section className="skill-tree">
            <h2 className="skill-tree-title">My Skill Tree</h2>

            {/* Center Planet with Proper Orbiting */}
            <div className="orbit-container">
                <div className="center-planet">{selectedPlanet.name}</div>
                
                {planets.map((planet, index) => (
                    <div
                        key={index}
                        className={`orbiting-planet planet-${index + 1}`}
                        onClick={() => handlePlanetClick(planet)}
                    >
                        {planet.name}
                    </div>
                ))}
            </div>

            {/* Description Box for Selected Planet */}
            <div className="planet-description">
                <h3>{selectedPlanet.name}</h3>
                <p>{selectedPlanet.description}</p>
            </div>
        </section>
    );
};

export default SkillTree;