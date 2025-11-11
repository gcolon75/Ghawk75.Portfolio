import React, { useRef, useEffect, useState } from 'react';
import './Project1Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import SEO, { getProjectStructuredData } from './SEO';
import projectData from '../data/projects.json';

import axleImage from '../assets/axleImage.JPG';
import axleHomepageThumb from '../assets/axle-homepage.JPG';
import axleAboutThumb from '../assets/axle-about.JPG';
import axleMechanicThumb from '../assets/axle-becomeMechanic.JPG';

import axleSlidesPDF from '../assets/axle-slides.pdf';

function Project1Page() {
  const pdfRef = useRef(null);
  const [caseStudyExpanded, setCaseStudyExpanded] = useState(false);

  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get project data for JSON-LD
  const project = projectData.projects.find(p => p.id === 'axle');
  const structuredData = project ? getProjectStructuredData(project) : null;

<div className="project-page" style={{ border: '2px solid red' }}></div>

  return (
    <>
      {structuredData && (
        <SEO
          title="Axle - Mobile Mechanic App Design"
          description="A complete redesign concept for a mobile mechanic app with a focus on user experience, connecting car owners with certified mechanics."
          url="/projects/axle"
          structuredData={structuredData}
          project={project}
        />
      )}
      
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

        {/* Expanded Case Study */}
        <div className="case-study-wrapper">
          <section className="case-study-section">
            <div className="case-study-header">
              <h2>Expanded Case Study</h2>
              <button 
                className="expand-toggle"
                onClick={() => setCaseStudyExpanded(!caseStudyExpanded)}
                aria-expanded={caseStudyExpanded}
                aria-label={caseStudyExpanded ? "Collapse case study" : "Expand case study"}
              >
                {caseStudyExpanded ? '− Collapse' : '+ Expand'}
              </button>
            </div>
            
            {caseStudyExpanded && (
              <div className="case-study-content">
                <div className="case-study-subsection">
                  <h3>Problem & Constraints</h3>
                  <p>
                    <strong>Business/User Goals:</strong> Traditional auto repair requires car owners to visit 
                    physical shops, arrange transportation, and wait in uncomfortable waiting rooms. Mechanics face 
                    overhead costs from maintaining storefronts and limited reach to potential customers. The goal 
                    was to create a platform that brings mechanics to customers while maintaining trust and transparency.
                  </p>
                  <p>
                    <strong>Constraints:</strong> Limited timeline (academic quarter), working with an existing 
                    client concept that needed a complete UX overhaul. We had to balance customer and mechanic 
                    needs while designing for both desktop and mobile experiences. Trust was critical—users needed 
                    to feel confident inviting strangers to service their vehicles at home or work.
                  </p>
                </div>

                <div className="case-study-subsection">
                  <h3>Approach & Trade-offs</h3>
                  <p>
                    Our team adopted a dual-persona approach, designing separate flows for customers and mechanics:
                  </p>
                  <ul>
                    <li><strong>Customer Flow:</strong> Simple booking with real-time tracking, transparent pricing, 
                    and AI-assisted diagnostics to reduce anxiety about car problems</li>
                    <li><strong>Mechanic Flow:</strong> Flexible scheduling, job management dashboard, and profile 
                    building tools to grow their business</li>
                  </ul>
                  <p>
                    <strong>Key Design Decisions:</strong>
                  </p>
                  <ul>
                    <li>Prioritized desktop design first (based on research showing users research on desktop before 
                    booking), then adapted for mobile</li>
                    <li>Added AI chatbot for initial diagnostics to help users understand their car issues before 
                    booking, reducing support burden</li>
                    <li>Emphasized mechanic profiles, reviews, and certifications to build trust</li>
                  </ul>
                  <p>
                    <strong>What was deprioritized:</strong> Advanced features like video consultations and multi-mechanic 
                    jobs were set aside to focus on core booking and service flows. We also simplified payment options 
                    to focus on the MVP experience.
                  </p>
                </div>

                <div className="case-study-subsection">
                  <h3>Decision Spotlight: AI Diagnostic Chatbot</h3>
                  <p>
                    The most impactful design decision was adding an AI chatbot for initial car diagnostics. During 
                    user research, we discovered that many customers felt anxious about describing car problems and 
                    worried about being overcharged or misdiagnosed.
                  </p>
                  <p>
                    <strong>The solution:</strong> A conversational chatbot that asks simple questions about symptoms 
                    (noises, warning lights, performance issues) and provides preliminary diagnoses with estimated 
                    service costs. This helps users:
                  </p>
                  <ul>
                    <li>Understand what might be wrong before booking</li>
                    <li>Get transparent price estimates upfront</li>
                    <li>Feel more confident communicating with mechanics</li>
                  </ul>
                  <p>
                    <strong>Why this works:</strong> The chatbot reduces information asymmetry between customers and 
                    mechanics. Users enter the service interaction informed and empowered, rather than anxious and 
                    vulnerable. It also pre-qualifies jobs for mechanics, improving efficiency.
                  </p>
                  <p>
                    <strong>Rationale:</strong> This feature emerged directly from user interviews where participants 
                    expressed fear of "being taken advantage of" due to lack of car knowledge. By providing education 
                    and transparency before the booking, we address the core trust barrier while adding value for both 
                    sides of the marketplace.
                  </p>
                </div>

                <div className="case-study-subsection">
                  <h3>Outcome</h3>
                  <p>
                    The Axle redesign successfully addressed user pain points identified in research:
                  </p>
                  <ul>
                    <li>Reduced friction in booking flow from 7 steps to 3 main screens</li>
                    <li>Added real-time tracking feature based on user anxiety about mechanic arrival</li>
                    <li>Created distinct visual identity that conveyed professionalism and trust</li>
                    <li>Delivered complete desktop and mobile interfaces with consistent design system</li>
                  </ul>
                  <p>
                    The final presentation to stakeholders highlighted how each design decision mapped to user research 
                    findings. The AI chatbot concept was particularly well-received as a differentiator in the mobile 
                    mechanic market.
                  </p>
                </div>

                <div className="case-study-subsection">
                  <h3>Reflection: What I'd Evolve Next</h3>
                  <p>
                    With more development time and resources, I would:
                  </p>
                  <ul>
                    <li>
                      <strong>Conduct usability testing:</strong> Run the prototypes through actual user testing to 
                      validate flows and identify friction points we missed in design reviews.
                    </li>
                    <li>
                      <strong>Expand mechanic onboarding:</strong> The mechanic side deserves deeper exploration, 
                      particularly around certification verification, payment processing, and customer communication tools.
                    </li>
                    <li>
                      <strong>Explore subscription models:</strong> Regular maintenance subscriptions could create 
                      recurring revenue while ensuring customers don't neglect vehicle care.
                    </li>
                    <li>
                      <strong>Add environmental context:</strong> Account for weather, lighting, and workspace constraints 
                      that affect mobile mechanic work—especially for customers in apartments or tight parking.
                    </li>
                    <li>
                      <strong>Develop the AI chatbot further:</strong> The diagnostic bot could integrate with vehicle 
                      make/model databases and even connect to OBD-II readers for more accurate diagnostics.
                    </li>
                  </ul>
                  <p>
                    The core user flows are solid, but the platform would benefit from deeper exploration of edge cases 
                    and the mechanic experience. The next phase should include prototyping with actual mechanics to ensure 
                    the tools genuinely support their workflow and business goals.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* 🔻 Contact Footer */}
      <ContactFooter />
    </div>
    </>
  );
}

export default Project1Page;
