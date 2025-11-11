import React, { useEffect } from 'react';
import './WritingPage.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import ProjectMeta from './ProjectMeta';

import cover from '../assets/HumanityArticleTitle.webp';
import pdfFile from '../assets/Humanity in Media.pdf';

function Writing3Page() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Humanity in Media: AI, Transhumanism, Control, and How We Prepare</h1>

          <ProjectMeta
            role="Writer, Media Analyst"
            skills={['Media Analysis', 'Critical Thinking', 'Policy Synthesis']}
            concepts={['Transhumanism', 'AI Ethics', 'Governance']}
            tools={['Research Methods', 'Content Analysis']}
          />

          <img src={cover} alt="Humanity in Media cover" className="Humanity in Media.pdf" />

          <p>
            What stories teach us about control, autonomy, and identity — and how to turn those patterns into
            real governance rules and product guardrails.
          </p>
        </div>

        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>Comparative Analysis:</strong> Mapped media tropes to real policy needs.</li>
                <li><strong>Risk Framing:</strong> Defined tiers of harm and proportional controls.</li>
                <li><strong>Communication:</strong> Clear, non-hyped language for stakeholders.</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>What I Did</h2>
              <ul>
                <li>Structured topics into scannable sections for decision-makers.</li>
                <li>Proposed implementable guardrails (evaluation, oversight, legibility).</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>PDF</h2>
            <iframe src={pdfFile} title="Humanity in Media (PDF)" allowFullScreen />
            <a className="view-link" href={pdfFile} download style={{marginTop:'1rem'}}>Download PDF</a>
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
export default Writing3Page;
