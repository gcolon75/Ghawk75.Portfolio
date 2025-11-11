import React from 'react';
import './Testimonials.css';

/**
 * Testimonials Component
 * Displays professional references and testimonials
 * Gracefully handles empty state with placeholder
 */
const Testimonials = () => {
  // Testimonial data structure - currently empty, ready for future additions
  const testimonials = [];
  
  // Example schema for when testimonials are added:
  // {
  //   id: 1,
  //   quote: "Gabriel's systems design work was exceptional...",
  //   author: "Jane Doe",
  //   role: "Lead Designer",
  //   relationship: "Collaborated on Project XYZ",
  //   year: 2024
  // }

  return (
    <section className="testimonials-container" aria-label="Professional References">
      <h2 className="testimonials-title">Testimonials & References</h2>
      
      {testimonials.length === 0 ? (
        <div className="testimonials-placeholder">
          <div className="placeholder-icon" aria-hidden="true">💼</div>
          <p className="placeholder-text">
            Professional references and testimonials available upon request.
          </p>
          <p className="placeholder-subtext">
            Please reach out via the contact section for detailed references from colleagues, 
            instructors, and collaborators.
          </p>
        </div>
      ) : (
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <article key={testimonial.id} className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-attribution">
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">{testimonial.role}</div>
                <div className="testimonial-context">
                  {testimonial.relationship} • {testimonial.year}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
