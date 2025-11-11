import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

/**
 * Reusable ProjectCard component
 * Displays a project with consistent styling and information hierarchy
 * 
 * Props:
 * - project: Project object from projects.json
 * - compact: Boolean for compact display mode
 */
const ProjectCard = ({ project, compact = false }) => {
  const [showImpactHow, setShowImpactHow] = useState(false);

  if (!project) return null;

  const displayTags = compact ? project.techStack.slice(0, 3) : project.techStack.slice(0, 4);
  const remainingTags = project.techStack.length - displayTags.length;

  return (
    <article 
      className={`project-card ${project.phase ? 'in-progress' : ''} ${project.featured ? 'featured' : ''} ${compact ? 'compact' : ''}`}
      aria-label={`${project.title} project`}
    >
      {project.featured && (
        <div className="featured-badge" aria-label="Featured project">⭐</div>
      )}
      
      <h3>{project.title}</h3>
      
      {project.year && (
        <span className="project-year">{project.year}</span>
      )}
      
      <p className="project-summary">{project.summary}</p>
      
      {/* Impact Evidence (for featured projects) */}
      {project.impact && !compact && (
        <div className="project-impact">
          <div className="impact-statement">
            <strong>Impact:</strong> {project.impact.statement}
          </div>
          <button
            className="impact-how-toggle"
            onClick={() => setShowImpactHow(!showImpactHow)}
            aria-expanded={showImpactHow}
            aria-controls={`impact-how-${project.id}`}
          >
            {showImpactHow ? '▼' : '▶'} How?
          </button>
          {showImpactHow && (
            <div 
              id={`impact-how-${project.id}`}
              className="impact-how"
              role="region"
            >
              {project.impact.how}
            </div>
          )}
        </div>
      )}
      
      {/* Tech Stack Tags */}
      {!compact && (
        <div className="tech-tags" role="list" aria-label="Technologies used">
          {displayTags.map((tech, idx) => (
            <span key={idx} className="tag" role="listitem">{tech}</span>
          ))}
          {remainingTags > 0 && (
            <span className="tag more-tags" role="listitem">
              +{remainingTags} more
            </span>
          )}
        </div>
      )}

      {/* Status or Link */}
      {project.phase ? (
        <div className="project-status">
          <span className="progress-badge" role="status">
            {project.phase} <span role="img" aria-label="rocket">🚀</span>
          </span>
          <Link 
            to={project.internalLink} 
            className="project-link"
            aria-label={`View details for ${project.title}`}
          >
            View Details
          </Link>
        </div>
      ) : (
        <Link 
          to={project.internalLink} 
          className="project-link"
          aria-label={`View ${project.title} project`}
        >
          View Project
        </Link>
      )}
    </article>
  );
};

export default ProjectCard;
