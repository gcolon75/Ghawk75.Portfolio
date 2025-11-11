import React from 'react';
import './SkillMatrix.css';
import projectData from '../data/projects.json';

/**
 * SkillMatrix Component
 * Displays expertise levels across core competencies
 * Auto-populated from project tags and metadata
 */
const SkillMatrix = () => {
  const projects = projectData.projects;
  
  // Define skill categories and compute levels based on project presence
  const skills = [
    {
      id: 'systems-design',
      name: 'Systems Design',
      tags: ['Systems Design', 'Game Design'],
      exposure: true,
      applied: true,
      architect: true // Has design docs and comprehensive concepts
    },
    {
      id: 'game-mechanics',
      name: 'Game Mechanics',
      tags: ['Game Mechanics', 'Roguelike', 'Dice Systems', 'Resource Management'],
      exposure: true,
      applied: true,
      architect: true
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      tags: ['Performance Optimization', 'Automation'],
      exposure: true,
      applied: true,
      architect: false
    },
    {
      id: 'accessibility',
      name: 'Accessibility',
      tags: ['Accessibility', 'UX Design', 'User Research'],
      exposure: true,
      applied: true,
      architect: true // Has comprehensive UX research and design systems
    },
    {
      id: 'dx-tooling',
      name: 'DX Tooling',
      tags: ['Automation', 'Platform Architecture', 'Web Development'],
      exposure: true,
      applied: true,
      architect: false
    }
  ];

  // Count projects for each skill
  const getProjectCount = (skill) => {
    return projects.filter(p => {
      const allTags = [
        ...p.techStack,
        ...(p.tags?.disciplines || []),
        ...(p.tags?.specialties || []),
        ...(p.tags?.genres || [])
      ];
      return skill.tags.some(tag => allTags.includes(tag));
    }).length;
  };

  return (
    <section className="skill-matrix-container" aria-label="Skill Expertise Matrix">
      <h2 className="skill-matrix-title">Skill Matrix</h2>
      <p className="skill-matrix-subtitle">
        Expertise levels derived from project experience and deliverables
      </p>
      
      <div className="skill-matrix-table">
        <div className="skill-matrix-header">
          <div className="skill-name-header">Competency</div>
          <div className="skill-level-header">Exposure</div>
          <div className="skill-level-header">Applied</div>
          <div className="skill-level-header">Architect</div>
        </div>
        
        {skills.map(skill => {
          const projectCount = getProjectCount(skill);
          return (
            <div key={skill.id} className="skill-matrix-row">
              <div className="skill-name">
                {skill.name}
                <span className="skill-project-count">
                  {projectCount} {projectCount === 1 ? 'project' : 'projects'}
                </span>
              </div>
              <div className={`skill-level ${skill.exposure ? 'active' : ''}`}>
                {skill.exposure ? '✓' : '—'}
              </div>
              <div className={`skill-level ${skill.applied ? 'active' : ''}`}>
                {skill.applied ? '✓' : '—'}
              </div>
              <div className={`skill-level ${skill.architect ? 'active' : ''}`}>
                {skill.architect ? '✓' : '—'}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="skill-matrix-legend">
        <div className="legend-item">
          <strong>Exposure:</strong> Familiar with concepts and terminology
        </div>
        <div className="legend-item">
          <strong>Applied:</strong> Used in shipped projects or prototypes
        </div>
        <div className="legend-item">
          <strong>Architect:</strong> Designed systems from scratch with documentation
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
