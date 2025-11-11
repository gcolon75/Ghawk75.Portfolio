import React, { useEffect } from 'react';
import './WritingPage.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import ProjectMeta from './ProjectMeta';

import cover from '../assets/GenZ.jpg';
import pdfFile from '../assets/AI and Gen Z Final Draft.docx.pdf'; // imported from assets — safe with spaces

function Writing1Page() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>AI and Gen Z: A Generation Growing Up With an Algorithm</h1>

          <ProjectMeta
            role="UX Researcher, Technical Writer"
            skills={['UX Research Synthesis', 'Evidence-based Writing', 'Ethical Framing']}
            concepts={['AI Ethics', 'Education Technology', 'Policy Analysis']}
            tools={['Survey Design', 'Interview Methods']}
          />

          <img src={cover} alt="AI and Gen Z cover" className="project-img" />

          <p>
            How a generation learns, copes, and connects alongside AI — and what policies and product choices
            protect growth instead of replacing it.
          </p>
        </div>

        {/* Skills & Contributions */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>UX Research Synthesis:</strong> Combined survey data, policy sources, and interviews into actionable themes.</li>
                <li><strong>Evidence-based Writing:</strong> Balanced narrative voice with citations and clear claims.</li>
                <li><strong>Ethical Framing:</strong> Translated risks (privacy, agency, development) into practical guardrails.</li>
                <li><strong>Information Design:</strong> Scannable structure, headings, and summaries for quick evaluation.</li>
                <li><strong>Accessibility:</strong> Semantic headings, high contrast, mobile readability.</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>What I Did</h2>
              <ul>
                <li>Defined the lenses (emotional support, learning, social connection) and the research plan.</li>
                <li>Collected/verified sources and condensed to decision-relevant insights.</li>
                <li>Drafted policy + product recommendations with concrete adoption steps.</li>
                <li>Edited for tone consistency and portfolio readability.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>PDF</h2>
            <iframe
              src={pdfFile}
              title="AI and Gen Z (PDF)"
              allowFullScreen
            />
            <a className="view-link" href={pdfFile} download style={{marginTop:'1rem'}}>Download PDF</a>
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
export default Writing1Page;
