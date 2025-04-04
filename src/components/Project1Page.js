import React, { useRef, useEffect } from 'react';
import './Project1Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import axleImage from '../assets/axleImage.JPG';
import axleHomepageThumb from '../assets/axle-homepage.JPG';
import axleAboutThumb from '../assets/axle-about.JPG';
import axleMechanicThumb from '../assets/axle-becomeMechanic.JPG';

import axleSlidesPDF from '../assets/axle-slides.pdf';

function Project1Page() {
  const pdfRef = useRef(null);

  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>axle: Mobile Mechanic App</h1>

          <img src={axleImage} alt="axle demo" className="project-img" />

          <p>
            <strong>axle</strong> is a mobile-first platform that connects car owners with certified, local mechanics
            for on-demand vehicle repair and maintenance — delivered directly to the customer’s location. Designed
            with simplicity and trust in mind, axle offers real-time booking, transparent pricing, and live mechanic
            tracking so users can get back on the road with confidence.
          </p>

          <p>
            For customers, axle eliminates the need for waiting rooms, offering fast, reliable service at their
            doorstep. For mechanics, the platform provides a flexible way to grow their business without needing a
            physical shop, giving them access to more jobs and repeat clients.
          </p>

          <p>
            Our team followed the full design process to reimagine the client’s existing app. We crafted both desktop
            and mobile interfaces based on our research and testing. From user interviews and persona creation to
            low-fidelity wireframes and final prototypes, each decision was rooted in real user needs. We visualized
            user journeys from both customer and mechanic perspectives to ensure a balanced, user-centric experience
            across the platform.
          </p>

          <p><strong>Key features include:</strong></p>
          <ul className="custom-feature-list">
            <li>📍 Real-time mechanic tracking</li>
            <li>🧠 AI chatbot for diagnosing car issues</li>
            <li>🛠️ Direct booking flow</li>
            <li>⭐ Customer reviews and service history dashboard</li>
            <li>👨‍🔧 Mechanic onboarding and scheduling portal</li>
          </ul>

          <p><em>“Connecting You to Expert Mechanics in Minutes”</em></p>

          <div className="tech-tags">
            <span className="tag">Ux Design</span>
            <span className="tag">Figma</span>
            <span className="tag">User Research</span>
            <span className="tag">Project Management</span>
            <span className="tag">Market Research</span>
            <span className="tag">Google Slides</span>
          </div>
        </div>

        {/* 🔷 Skills & Contributions */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>UX Design:</strong> Designed a user-friendly interface in Figma using wireframes, prototyping, and iteration based on feedback.</li>
                <li><strong>Human-Computer Interaction (HCI):</strong> Considered user behavior and accessibility principles when creating interactive flows.</li>
                <li><strong>Project Management:</strong> Managed timelines, assigned tasks, and facilitated collaboration across the team.</li>
                <li><strong>Research:</strong> Conducted user interviews and competitive analysis to guide design decisions with real insights.</li>
                <li><strong>Cognitive Science:</strong> Applied understanding of human perception and cognitive load to streamline user experiences.</li>
              </ul>
            </section>

            <section className="contribution-section">
              <h2>My Role & Contributions</h2>
              <ul>
                <li>Led and conducted comprehensive user research interviews</li>
                <li>Designed primarily for desktop platforms with responsive considerations</li>
                <li>Created high-fidelity mockups with detailed annotations</li>
                <li>Prepared and delivered polished design presentations for stakeholders</li>
                <li>Developed user flows and interactive prototypes</li>
                <li>Collaborated in team critiques to iterate on designs based on feedback</li>
                <li>Maintained consistent design system and visual identity across pages</li>
              </ul>
            </section>
          </div>
        </div>

        {/* 🔷 Gallery Section */}
        <div className="gallery-wrapper">
          <section className="gallery-section">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <a href={axleHomepageThumb} target="_blank" rel="noopener noreferrer">
                  <img src={axleHomepageThumb} alt="Axle Homepage Design" className="gallery-thumb" />
                </a>
                <p className="gallery-caption">Homepage</p>
              </div>

              <div className="gallery-item">
                <a href={axleAboutThumb} target="_blank" rel="noopener noreferrer">
                  <img src={axleAboutThumb} alt="About Page" className="gallery-thumb" />
                </a>
                <p className="gallery-caption">About Page</p>
              </div>

              <div className="gallery-item">
                <a href={axleMechanicThumb} target="_blank" rel="noopener noreferrer">
                  <img src={axleMechanicThumb} alt="Become a Mechanic Flow" className="gallery-thumb" />
                </a>
                <p className="gallery-caption">Become a Mechanic</p>
              </div>
            </div>
          </section>
        </div>

        {/* 🔷 PDF Viewer Section */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section" ref={pdfRef}>
            <h2>Slide Preview</h2>
            <iframe
              src={axleSlidesPDF}
              title="Axle Project Slides"
              allowFullScreen
              width="100%"
              height="700px"
              style={{
                border: '2px solid #66fcf1',
                borderRadius: '12px',
                marginTop: '1rem',
                boxShadow: '0 0 30px rgba(102, 252, 241, 0.5)',
              }}
            />
          </section>
        </div>
      </div>

      {/* 🔻 Contact Footer */}
      <ContactFooter />
    </div>
  );
}

export default Project1Page;
