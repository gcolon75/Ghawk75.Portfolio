import React, { useState } from 'react';
import Planet from './Planet';
import './SkillTree.css';

const planetsData = [
    { id: 1, name: 'Coding', description: 'Mastery of Java, Python, and web development.' },
    { id: 2, name: 'Design', description: 'Expertise in UX/UI design and Figma mockups.' },
    { id: 3, name: 'UX Research', description: 'Focused on user behavior and design thinking.' },
    { id: 4, name: 'Game Development', description: 'Projects in Unity, game mechanics, and storytelling.' },
    { id: 5, name: 'Future Goals', description: 'Aiming to master advanced game engines and 3D design.' }
];

const SkillTree = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(selectedPlanet === planet ? null : planet);
    };

    return (
        <div className="skill-tree">
            <div className="center-star">Ghawk75</div>
            {planetsData.map((planet, index) => (
                <Planet
                    key={planet.id}
                    planet={planet}
                    isSelected={selectedPlanet === planet}
                    onClick={() => handlePlanetClick(planet)}
                    orbitAngle={index * (360 / planetsData.length)}
                />
            ))}
            {selectedPlanet && (
                <div className="planet-description">
                    <h2>{selectedPlanet.name}</h2>
                    <p>{selectedPlanet.description}</p>
                </div>
            )}
        </div>
    );
};

export default SkillTree;