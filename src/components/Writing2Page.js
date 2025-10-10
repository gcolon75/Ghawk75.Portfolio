import React, { useEffect } from 'react';
import './WritingPage.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import cover from '../assets/openAILogo.jpg';
import pdfFile from '../assets/ChatGPT Prompt CaseStudy.docx.pdf';

function Writing2Page() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Prompt Case Study: Prompting for Finance Tasks</h1>
          <img src={cover} alt="Prompt case study cover" className="openAILogo.jpg" />

          <p>
            3 finance tasks × 5 prompt strategies × 5 trials — when prompting changes <em>presentation</em> vs.
            <em> correctness</em>, and how to standardize output for auditability.
          </p>

          <div className="tech-tags">
            <span className="tag">Prompting</span><span className="tag">Finance</span>
            <span className="tag">Research</span><span className="tag">UX of AI</span>
          </div>
        </div>

        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>Experimental Design:</strong> Controlled comparisons across tasks and strategies.</li>
                <li><strong>Metric Definition:</strong> Correctness, structure, tone, and emoji usage.</li>
                <li><strong>Result Analysis:</strong> Interpreted style vs. accuracy changes; derived guidance.</li>
                <li><strong>Template Design:</strong> Output schemas for consistency and review.</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>What I Did</h2>
              <ul>
                <li>Authored prompts, ran 75 trials, and logged results for comparison.</li>
                <li>Summarized findings and proposed prompting guidelines for finance workflows.</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>PDF</h2>
            <iframe src={pdfFile} title="Prompt Case Study (PDF)" sandbox="allow-scripts allow-same-origin" allowFullScreen />
            <a className="view-link" href={pdfFile} download style={{marginTop:'1rem'}}>Download PDF</a>
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
export default Writing2Page;
