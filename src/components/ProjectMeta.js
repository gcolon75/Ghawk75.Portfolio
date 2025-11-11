import React from 'react';
import './ProjectMeta.css';

/**
 * ProjectMeta Component
 * Displays consistent metadata for projects and writing pieces
 * Shows Skills, Concepts, Tools, and Role at the top of detail pages
 * 
 * Props:
 * - role: String - the role(s) for this project
 * - skills: Array - list of skills/disciplines used
 * - concepts: Array - list of concepts/specialties applied
 * - tools: Array - list of tools/technologies used
 */
const ProjectMeta = ({ role, skills, concepts, tools }) => {
  // Filter out empty arrays
  const hasSkills = skills && skills.length > 0;
  const hasConcepts = concepts && concepts.length > 0;
  const hasTools = tools && tools.length > 0;
  const hasRole = role && role.trim().length > 0;

  // Don't render if no metadata
  if (!hasSkills && !hasConcepts && !hasTools && !hasRole) {
    return null;
  }

  return (
    <div className="project-meta">
      {hasRole && (
        <div className="meta-item">
          <span className="meta-label">Role:</span>
          <span className="meta-value">{role}</span>
        </div>
      )}
      
      {hasSkills && (
        <div className="meta-item">
          <span className="meta-label">Skills:</span>
          <span className="meta-value">{skills.join(', ')}</span>
        </div>
      )}
      
      {hasConcepts && (
        <div className="meta-item">
          <span className="meta-label">Concepts:</span>
          <span className="meta-value">{concepts.join(', ')}</span>
        </div>
      )}
      
      {hasTools && (
        <div className="meta-item">
          <span className="meta-label">Tools:</span>
          <span className="meta-value">{tools.join(', ')}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectMeta;
