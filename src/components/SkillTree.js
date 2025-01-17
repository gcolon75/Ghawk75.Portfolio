import React, { useState } from 'react';
import './SkillTree.css';

function SkillTree() {
    const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);

    const planets = [
        { 
            name: "Game", 
            description: "Studied game design principles, mechanics, and interactive storytelling. Experience with balancing gameplay, designing UI/UX for games, and prototyping in engines like Unity and Three.js. Focus on player engagement and game theory." 
        },
        { 
            name: "Coding", 
            description: "Gained proficiency in programming through coursework and personal projects. Experience in Java, Python, JavaScript, and React. Built interactive applications, optimized algorithms, and explored back-end technologies." 
        },
        { 
            name: "UX", 
            description: "Developed skills in user-centered design, wireframing, and usability testing. Applied cognitive science principles to UI/UX projects, ensuring accessibility and intuitive interaction. Familiar with Figma, Adobe XD, and user research methods." 
        },
        { 
            name: "Cognitive Science", 
            description: "Core discipline integrating psychology, neuroscience, and AI. Explored human cognition, decision-making, perception, and computational models of the mind. Coursework included neural networks, cognitive architectures, and HCI applications." 
        },
        { 
            name: "Development", 
            description: "Hands-on experience in full-stack development, web applications, and software engineering. Built applications using React, Node.js, and SQL. Focused on efficient code structuring, scalability, and deployment strategies." 
        },
        { 
            name: "Design", 
            description: "Deep understanding of visual hierarchy, color theory, and typography. Designed interfaces and digital experiences optimized for usability and aesthetics. Experience with front-end frameworks, component libraries, and branding." 
        },
        { 
            name: "Neuroscience", 
            description: "Studied brain function, sensory processing, and neuroplasticity. Applied neuroscience principles to UX, exploring how perception and cognitive biases affect user interactions. Familiar with EEG analysis and neural computation." 
        },
        { 
            name: "Research", 
            description: "Conducted academic and industry research in cognitive science, HCI, and AI. Designed experiments, analyzed data using Python and R, and published insights on user behavior and emerging tech trends." 
        },
        { 
            name: "Project Management", 
            description: "Led teams, coordinated timelines, and implemented agile methodologies. Experience in sprint planning, stakeholder communication, and risk management. Successfully managed projects in UX, game development, and software engineering." 
        },
        { 
            name: "HCI", 
            description: "Explored the intersection of technology and human behavior. Designed interactive systems with a focus on usability, accessibility, and efficiency. Experience in eye-tracking studies, prototyping, and user testing." 
        },
    ];

    return (
        <div className="skill-tree-section">
            <h2>My Skill Tree</h2>
            <div className="skill-container">
                {planets.map((planet, index) => (
                    <React.Fragment key={index}>
                        {/* Planet Nodes */}
                        <div
                            className={`orbit-planet orbit-${index} ${
                                selectedPlanetIndex === index ? 'selected' : ''
                            }`}
                            onClick={() => setSelectedPlanetIndex(index)}
                        >
                            {planet.name}
                        </div>

                        {/* Connection Lines */}
                        {index < planets.length - 1 && (
                            <div className={`connection-line line-${index}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Description Box - Appears when a node is clicked */}
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