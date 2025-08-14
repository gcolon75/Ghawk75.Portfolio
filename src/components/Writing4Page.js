import React, { useEffect } from 'react';
import './WritingPage.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import cover from '../assets/whova.jpg';
import docxFile from '../assets/Whova Competetive Analysis.docx'; // DOCX won't render inline

function Writing4Page() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <h1>Whova: Competitive Analysis</h1>
          <img src={cover} alt="Whova Competitive Analysis cover" className="whova.jpg" />

          <p>
            Positioning snapshot vs. vFairs, EventX, Eventtia, and Airmeet — gaps, pricing posture, and product bets
            that win planners.
          </p>

          <div className="tech-tags">
            <span className="tag">Competitive Analysis</span><span className="tag">SaaS</span>
            <span className="tag">Events</span>
          </div>
        </div>

        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>Market Scanning:</strong> Feature matrices, pricing signals, differentiators.</li>
                <li><strong>Strategic Writing:</strong> Crisp recommendations tied to buyer priorities.</li>
                <li><strong>Communication:</strong> Executive-read summaries and clear visuals.</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>What I Did</h2>
              <ul>
                <li>Built the comparison framework; extracted what matters to planners.</li>
                <li>Drafted next-step product opportunities and GTM ideas.</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="pdf-wrapper">
          <section className="pdf-viewer-section">
            <h2>Download</h2>
            <p style={{maxWidth:850, margin:'0 auto 1rem', color:'#e0e0e0'}}>
              A browser can’t render <code>.docx</code> inline. Click below to download. If you export this to PDF
              (e.g., <em>Whova Competitive Analysis.pdf</em>) and place it in <code>src/assets/</code>, replace the import
              above and it will display inline like the others.
            </p>
            <a className="view-link" href={docxFile} download>Download DOCX</a>
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
export default Writing4Page;
