import React, { useEffect } from 'react';
import './Project3Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import tritonGoTitle from '../assets/TritonGoTitle.JPG';

function Project3Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>TritonGo: Social Campus App</h1>

          <img src={tritonGoTitle} alt="TritonGo Title" className="project-img" />

          <p>
            <strong>TritonGo</strong> is a social campus app built to promote in-person interaction through daily missions, rewards, and location-based team gameplay. It enables students to connect, collaborate, and engage with their campus community using their UCSD email.
          </p>

          <p>
            Our app gamifies goal tracking with a lighthearted social twist. Students form teams to complete daily quests, discover in-person events, and conquer locations such as colleges and dungeons using simple battle mechanics. Built using a Figma prototype, this concept is currently deployed as a functional Wix website for demonstration.
          </p>

          <p>
            I led the UI and brand identity design, created the Figma prototype, and contributed to building the public-facing Wix site for our client pitch.
          </p>

          <p><strong>Key features include:</strong></p>
          <ul className="custom-feature-list">
            <li>📍 Map-based location interaction and dungeon conquering</li>
            <li>👥 Team-based goal completion</li>
            <li>🎓 UCSD-exclusive access and email login</li>
            <li>⚔️ In-app battles, campus-based territory claiming</li>
            <li>🧠 Real-time quest tracking and student challenges</li>
          </ul>

          <p><em>“Making Real Life a Campus Quest”</em></p>

          <div className="tech-tags">
            <span className="tag">UX Design</span>
            <span className="tag">Wix</span>
            <span className="tag">Figma</span>
            <span className="tag">Teamwork</span>
            <span className="tag">Pitch Presentation</span>
          </div>
        </div>

        {/* 🔷 Skills & Contributions */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>UX Design:</strong> Designed a gamified and intuitive app experience using Figma.</li>
                <li><strong>Human-Computer Interaction (HCI):</strong> Focused on social interaction flows and usability for student users.</li>
                <li><strong>Project Management:</strong> Coordinated branding, design, and site launch timelines.</li>
                <li><strong>Research:</strong> Interviewed students to validate concept and features.</li>
                <li><strong>Cognitive Science:</strong> Applied gamification principles to drive user motivation and retention.</li>
              </ul>
            </section>

            <section className="contribution-section">
              <h2>My Role & Contributions</h2>
              <ul>
                <li>Led the design and Figma prototyping of the app</li>
                <li>Created visual branding and logos</li>
                <li>Interviewed target users to inform app features</li>
                <li>Built the client-facing website on Wix</li>
                <li>Developed pitch materials and presented the concept</li>
                <li>Collaborated on the storyline, structure, and in-app quest mechanics</li>
              </ul>
            </section>
          </div>
        </div>

        {/* 🔷 Website Embed Section */}
        <div className="video-wrapper">
          <section className="video-section">
            <h2>Live Demo Website</h2>
            <iframe
              src="https://m5mendez.wixsite.com/triton-go-social"
              title="TritonGo Wix Website"
              width="100%"
              height="600"
              style={{ border: 'none', borderRadius: '12px' }}
              allowFullScreen
            />
          </section>
        </div>

        {/* 🔷 Slide Deck Embed Section */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section slide-deck">
            <h2>Slide Deck</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vREgCOs9BiszlnEsO1jaBQnUbTiScP3j9H43M3kLgqoRxvM_ko0bq1-y_eSBuxKGg/pubembed?start=false&loop=true&delayms=3000"
              title="TritonGo Slide Deck"
              frameBorder="0"
              width="100%"
              height="569"
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
            />
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}

export default Project3Page;
