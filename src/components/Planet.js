import React from 'react';
import './Planet.css';

const Planet = ({ planet, isSelected, onClick, orbitAngle }) => {
    return (
        <div
            className={`planet ${isSelected ? 'selected' : ''}`}
            style={{
                transform: `rotate(${orbitAngle}deg) translate(200px) rotate(-${orbitAngle}deg)`,
            }}
            onClick={onClick}
        >
            <div className="planet-glow">{planet.name}</div>
        </div>
    );
};

export default Planet;