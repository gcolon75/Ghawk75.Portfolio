import React, { useEffect } from 'react';
import './Project4Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import volleyballImage from '../assets/VolleyballMobileTitle.JPG';
import volleyballPDF from '../assets/Volleyball Mobile.pdf';

function Project4Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Volleyball Mobile: Community Court App</h1>

          <div className="top-images-row">
            <img src={volleyballImage} alt="Volleyball Mobile Title Screen" />
          </div>

          <p>
            <strong>Volleyball Mobile</strong> is a mobile-first concept designed to foster inclusiveness and
            community around beach volleyball at La Jolla Shores. The app introduces the idea of challenge courts,
            player rankings, and social zones so that players of all levels can connect and enjoy the sport together.
          </p>

          <p>
            Our research found that new or casual players often felt excluded from established groups. Volleyball
            Mobile solves this by allowing users to join open games, indicate skill level, and socialize through
            in-app events and features. Visual elements like flags, animated courts, and personalized profiles help
            signal openness to play and break down social barriers.
          </p>

          <p>
            This project prioritized intuitive design, low-friction onboarding, and a strong sense of beach community.
            Through Figma prototypes and peer feedback, we iterated on layout, visuals, and flow to build something that
            felt fun and approachable.
          </p>

          <p><strong>Key features include:</strong></p>
          <ul className="custom-feature-list">
            <li>🏐 Challenge court queue system with rank filtering</li>
            <li>🌊 Social flags to signal openness to play</li>
            <li>💬 Group chats and beach-wide announcements</li>
            <li>📍 GPS-based beach court location system</li>
            <li>📸 Personalized player profiles and rankings</li>
          </ul>

          <p><em>“A better way to find your next volleyball squad.”</em></p>

          <div className="tech-tags">
            <span className="tag">UX Design</span>
            <span className="tag">Figma</span>
            <span className="tag">Mobile-First</span>
            <span className="tag">Social Research</span>
            <span className="tag">User Interviews</span>
          </div>
        </div>

        {/* 🔷 Skills & Contributions */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>UX Design:</strong> Created wireframes and mobile-friendly flows using Figma.</li>
                <li><strong>Human-Computer Interaction (HCI):</strong> Used accessibility and interaction principles to design intuitive touch-based navigation.</li>
                <li><strong>Project Management:</strong> Coordinated design tasks and deliverables among teammates.</li>
                <li><strong>Research:</strong> Conducted field interviews and pain point identification to inspire inclusive design choices.</li>
              </ul>
            </section>

            <section className="contribution-section">
              <h2>My Role & Contributions</h2>
              <ul>
                <li>Led team brainstorming and ideation for beach court inclusiveness</li>
                <li>Sketched challenge court features and player ranking models</li>
                <li>Created mobile-first UI in Figma with unique beach visual elements</li>
                <li>Conducted peer testing and implemented feedback into design improvements</li>
                <li>Assisted with final pitch and slide deck design</li>
              </ul>
            </section>
          </div>
        </div>

        {/* 🔷 PDF Viewer Section */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>Final Project PDF</h2>
            <iframe
              src={volleyballPDF}
              title="Volleyball Mobile PDF"
              sandbox="allow-scripts allow-same-origin"
              allowFullScreen
            />
          </section>
        </div>

        {/* 🔷 Google Slides Section */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section slide-deck">
            <h2>Presentation Slide Deck</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vSKczbb8O26gGEGw4KXQJJlBLcJesmnOB-IbEbO5-cP4WCaD3uOhLjhoXa6BPDrvg/pubembed?start=false&loop=false&delayms=3000"
              title="Volleyball Mobile Slide Deck"
              sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
              allowFullScreen
              frameBorder="0"
            />
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}

export default Project4Page;
