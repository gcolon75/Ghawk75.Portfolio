import React, { useState } from 'react';
import './Journey.css';

const journeyData = [
    { title: "Level 1: High School Explorer", description: "My high school interests.", badge: "🏫" },
    { title: "Level 2: Collegiate Adventurer", description: "My journey at UCSD, diving into Cognitive Science and Design.", badge: "🎓" },
    { title: "Level 3: Aspiring Pro", description: "Ready to graduate and enter the workforce.", badge: "💼" },
    { title: "Level 4: First Career Milestone", description: "Locked until my first job.", badge: "🔒", locked: true }
];

function Journey() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < journeyData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="journey">
            <h2>My Journey</h2>
            <div className="carousel-container">
                <button 
                    className="carousel-btn left" 
                    onClick={prevSlide} 
                    disabled={currentIndex === 0}
                >
                    ⬅️
                </button>

                <div className="carousel-track">
                    <div className={`journey-card ${journeyData[currentIndex].locked ? 'locked' : ''}`}>
                        <div className="journey-icon">{journeyData[currentIndex].badge}</div>
                        <h3>{journeyData[currentIndex].title}</h3>
                        <p>{journeyData[currentIndex].description}</p>
                    </div>
                </div>

                <button 
                    className="carousel-btn right" 
                    onClick={nextSlide} 
                    disabled={currentIndex === journeyData.length - 1}
                >
                    ➡️
                </button>
            </div>
        </section>
    );
}

export default Journey;