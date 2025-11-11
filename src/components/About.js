import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-section">
            <h2>About Me</h2>
            <p>
                Hi, I'm Gabriel Colón, a Cognitive Science major specializing in Human Interaction and Design, 
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

            {/* Education Module */}
            <div className="education-module">
                <h3>Education</h3>
                <div className="education-card">
                    <div className="education-header">
                        <strong>University of California, San Diego</strong>
                        <span className="education-year">Class of 2023</span>
                    </div>
                    <div className="education-details">
                        <div className="degree">
                            <strong>B.S. Cognitive Science</strong> – Human Interaction & Design
                        </div>
                        <div className="minor">
                            Minor in Computational Social Science
                        </div>
                        <div className="focus-areas">
                            <span className="focus-label">Focus Areas:</span>
                            <div className="focus-tags">
                                <span className="focus-tag">Human-Computer Interaction</span>
                                <span className="focus-tag">User Experience Design</span>
                                <span className="focus-tag">Data-Driven Design</span>
                                <span className="focus-tag">Cognitive Neuroscience</span>
                                <span className="focus-tag">Design Thinking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
