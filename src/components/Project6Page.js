import React, { useRef, useEffect } from 'react';
import './Project6Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import articlePDF from '../assets/HumanityArticle.pdf';
import articleCoverImage from '../assets/HumanityArticleTitle.webp';

function Project6Page() {
  const pdfRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <img src={articleCoverImage} alt="The Future of Humanity Cover" className="project-img" />
          <h1>The Future of Humanity: My First Cognitive Science & Philosophy Article</h1>
          <p className="project-status-paused">🧠 This was my first published deep-dive article — exploring AI, identity, and what it means to be human.</p>

          <p>
            This is my first deep-dive into writing about cognitive science, philosophy, and our technological future. 
            In this article, I explored the intersection of artificial intelligence, ethics, transhumanism, and what it means to be human in a time of rapid technological change.
          </p>

          <p>
            What started as a personal curiosity became a thoughtful reflection on the fears, hopes, and ethical dilemmas humanity faces. I drew inspiration from 
            religious texts, science fiction, and real-world examples to craft a narrative that asks not only where we're going — but who we might become.
          </p>

          <ul className="custom-feature-list">
            <li>🧠 Philosophical questions around the soul, personhood, and consciousness</li>
            <li>📚 Analysis of sci-fi like <em>Mass Effect</em>, <em>The Matrix</em>, <em>Detroit: Become Human</em></li>
            <li>🧬 Debates on AI ethics, rebellion, and human control</li>
            <li>📖 Reflections on history, biblical allegory, and real-world AI risks</li>
            <li>✍️ My first formal essay blending storytelling, research, and critical thought</li>
          </ul>

          <blockquote className="highlight-quote">
            "Perhaps the greatest question is not whether AI will surpass us but whether we will be worthy of the intelligence we create."
          </blockquote>

          <div className="tech-tags">
            <span className="tag">Cognitive Science</span>
            <span className="tag">Philosophy</span>
            <span className="tag">AI Ethics</span>
            <span className="tag">Transhumanism</span>
            <span className="tag">Writing</span>
            <span className="tag">Critical Thinking</span>
            <span className="tag">Sci-Fi Analysis</span>
          </div>
        </div>

        {/* 🔷 Skills & Contributions */}
        <div className="skills-contributions-wrapper section-spacing">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Key Skills Applied</h2>
              <ul>
                <li><strong>Philosophical Writing:</strong> Explored ethical and metaphysical issues around identity and AI.</li>
                <li><strong>Interdisciplinary Research:</strong> Connected sci-fi, theology, ethics, and technology.</li>
                <li><strong>Critical Analysis:</strong> Deconstructed fictional and real-world narratives to build a structured argument.</li>
                <li><strong>Structured Argumentation:</strong> Balanced narrative writing with evidence-based reasoning.</li>
                <li><strong>Independent Work:</strong> Self-directed learning and writing project based entirely on personal interest.</li>
              </ul>
            </section>

            <section className="contribution-section">
              <h2>My Role & Reflection</h2>
              <ul>
                <li>Researched and authored the full piece from scratch.</li>
                <li>Analyzed and interpreted ideas from sci-fi and real-world ethical issues.</li>
                <li>Practiced blending creativity, curiosity, and philosophical reflection in writing.</li>
                <li>This piece ignited a new passion for writing and critical theory, and I'm excited to keep exploring it further.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="pdf-wrapper section-spacing">
          <section className="pdf-viewer-section" ref={pdfRef}>
            <h2>Read the Full Article</h2>
            <iframe
              src={articlePDF}
              title="The Future of Humanity PDF"
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

        {/* 📚 References Section */}
        <div className="references-wrapper section-spacing">
          <section className="references-section">
            <h2>📚 References</h2>
            <ul className="reference-list">
              <li><strong>Bible</strong>, Genesis 11; Proverbs 16:18</li>
              <li><em>The Matrix</em>, Wachowskis, Warner Bros. (1999)</li>
              <li><em>Mass Effect</em> Series, BioWare (2007–2012)</li>
              <li><em>Detroit: Become Human</em>, Quantic Dream (2018)</li>
              <li><em>Cyberpunk 2077</em>, CD Projekt Red (2020)</li>
              <li><em>Blade Runner</em>, Ridley Scott (1982)</li>
              <li><em>Avengers: Age of Ultron</em>, Joss Whedon (2015)</li>
              <li><em>I, Robot</em>, Alex Proyas (2004)</li>
              <li><em>The Terminator</em> Series, James Cameron (1984–)</li>
              <li><em>Halo</em> Series, Bungie / 343 Industries (2001–)</li>
              <li>European Commission, AI Act (2021)</li>
              <li>AI Now Institute Report (2018)</li>
              <li>Buolamwini & Gebru, “Gender Shades” (2018)</li>
              <li>New York Times, MIT Tech Review – AI Bias Coverage</li>
              <li>NATO Emerging Disruptive Technologies Strategy (2022)</li>
              <li>U.S. DoD Unmanned Systems Roadmap (2013)</li>
            </ul>
          </section>
        </div>

        <ContactFooter />
      </div>
    </div>
  );
}

export default Project6Page;
