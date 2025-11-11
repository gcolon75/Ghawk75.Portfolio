import React from 'react';
import './QuickStats.css';
import projectData from '../data/projects.json';

/**
 * QuickStats Component
 * Displays computed credibility signals derived from actual project data
 */
const QuickStats = () => {
  const projects = projectData.projects;
  
  // Compute stats from actual project data
  const systemsFocusedCount = projects.filter(p => 
    p.techStack.includes('Systems Design') || 
    p.techStack.includes('Game Design') ||
    (p.tags?.disciplines && (
      p.tags.disciplines.includes('Systems Design') || 
      p.tags.disciplines.includes('Game Design')
    ))
  ).length;
  
  const publicArtifacts = projects.filter(p => 
    p.assets && p.assets.some(a => a.type === 'document' || a.type === 'image')
  ).length;
  
  const stats = [
    {
      id: 'systems-projects',
      value: systemsFocusedCount,
      label: 'Systems-Focused Projects',
      icon: '⚙️'
    },
    {
      id: 'accessibility',
      value: 'A11y ≥95',
      label: 'Lighthouse Accessibility',
      icon: '♿'
    },
    {
      id: 'structured-data',
      value: 'Enabled',
      label: 'Person + CreativeWork Schema',
      icon: '📊'
    },
    {
      id: 'artifacts',
      value: `${publicArtifacts}+`,
      label: 'Public Artifacts & Case Studies',
      icon: '📁'
    }
  ];

  return (
    <section className="quick-stats-container" aria-label="Quick Statistics">
      <h2 className="quick-stats-title">Quick Stats</h2>
      <div className="quick-stats-grid">
        {stats.map(stat => (
          <div key={stat.id} className="stat-card" role="article">
            <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;
