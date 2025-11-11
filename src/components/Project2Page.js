import React, { useRef, useEffect } from 'react';
import './Project2Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import ProjectMeta from './ProjectMeta';
import projectData from '../data/projects.json';

import goaleeImage from '../assets/GoaleeHomescreen.JPG';
import goaleePoster from '../assets/GoaleePoster.jpg';
import goaleeVideo from '../assets/GoaleeVideo.mp4';
import goaleeDemo from '../assets/GoaleeDemo.mp4';

function Project2Page() {
  const pdfRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectData.projects.find(p => p.id === 'goalee');

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Goalee: Campus Social Productivity App</h1>

          <ProjectMeta
            role={project?.role}
            skills={project?.tags?.disciplines}
            concepts={project?.tags?.specialties}
            tools={project?.tags?.tools}
          />

          <div className="top-images-row">
            <img src={goaleeImage} alt="Goalee Homescreen" />
            <img src={goaleePoster} alt="Goalee Poster" />
          </div>

          <p>
            <strong>Goalee</strong> is a mobile application concept designed to promote student productivity and social connection by gamifying daily goals and encouraging in-person interaction. The app allows users to complete tasks, earn rewards, and collaborate with others across their community.
          </p>

          <p>
            Our team designed Goalee as a solution to the common challenges of motivation and isolation in academic/early career settings. With features like public goal boards, team quests, and social feeds, Goalee turns personal growth into a community-driven experience.
          </p>

          <p>
            From competitive analysis and user interviews to wireframes and branding, we explored every angle to deliver a product that supports individual accountability and builds campus culture. Our final Figma prototype demonstrated the complete onboarding flow, dashboard interface, and team-based interaction system.
          </p>

          <p><strong>Key features include:</strong></p>
          <ul className="custom-feature-list">
            <li>📅 Goal Tracking & Daily Quests</li>
            <li>🤝 Team Creation & Collaboration</li>
            <li>🎓 Campus-wide Challenge Boards</li>
            <li>📲 Social Feed & Progress Sharing</li>
            <li>🏆 Gamified Rewards & Badges</li>
          </ul>

          <p><em>"Leveling Up Together — One Goal at a Time"</em></p>

          <div className="tech-tags">
            <span className="tag">Figma</span>
            <span className="tag">UX Design</span>
            <span className="tag">Human-Centered Design</span>
            <span className="tag">Research</span>
            <span className="tag">Pitch Presentation</span>
          </div>
        </div>

        {/* 🔷 Skills & Contributions */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>UX Design:</strong> Created wireframes and prototypes reflecting core user flows in Figma.</li>
                <li><strong>HCI:</strong> Considered user habits and engagement strategies while designing the system architecture.</li>
                <li><strong>Project Management:</strong> Led brainstorming sessions, delegated roles, and organized deliverables.</li>
                <li><strong>Research:</strong> Conducted interviews and analyzed behavior patterns to guide app features.</li>
                <li><strong>Design Thinking:</strong> Applied iterative testing and empathy maps to center user experience.</li>
              </ul>
            </section>

            <section className="contribution-section">
              <h2>My Role & Contributions</h2>
              <ul>
                <li>Directed creative vision and core interaction flow</li>
                <li>Worked as Co-team Leader and flex figma desinger</li>
                <li>Helped build final Figma prototype with multiple screens</li>
                <li>Presented pitch deck to stakeholders and faculty</li>
                <li>Facilitated feedback loops during team critiques</li>
              </ul>
            </section>
          </div>
        </div>

        {/* 🔷 Slide Deck Section */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section slide-deck" ref={pdfRef}>
            <h2>Slide Deck</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vSpL_voyYopV9thl57oDpDqboJKtujCbfX-xHwc6N22XR5Hq-h22LNQcZAjyhI_Ig/pubembed?start=false&loop=true&delayms=3000"
              title="Goalee Slide Deck"
              allowFullScreen
            />
          </section>
        </div>

        {/* 🔷 Project Video Section */}
        <div className="video-wrapper">
          <section className="video-section">
            <h2>Project Overview Video</h2>
            <video controls className="project-video">
              <source src={goaleeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>

        {/* 🔷 Demo Video Section */}
        <div className="video-wrapper">
          <section className="video-section">
            <h2>Live App Walkthrough</h2>
            <video controls className="project-video">
              <source src={goaleeDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>

        {/* 🔷 Budget Model Sheet */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section budget-model">
            <h2>Budget & Growth Model</h2>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0oSbEK83wyRDNdhnA1izE_SfPZ7WBdF9VnMTOYrTYtxLF8TB-LT6h-BGTSN1Erw/pubhtml?widget=true&amp;headers=false"
              title="Goalee Budget Sheet"
            />
          </section>
        </div>
      </div>

      {/* 🔻 Contact Footer */}
      <ContactFooter />
    </div>
  );
}

export default Project2Page;