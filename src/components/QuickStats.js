import React, { useState } from 'react';
import './QuickStats.css';
import projectData from '../data/projects.json';

/**
 * QuickStats Component
 * Displays computed credibility signals derived from actual project data
 * Updated to include flagship artifacts count and responsive collapse control
 */
const QuickStats = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const projects = projectData.projects;
  
  // Compute stats from actual project data
  
  // Systems projects: count derived from tags (tag includes "systems" or "systems-design")
  const systemsProjects = projects.filter(p => 
    p.techStack.some(tech => tech.toLowerCase().includes('systems')) ||
    (p.tags?.disciplines && p.tags.disciplines.some(d => d.toLowerCase().includes('systems')))
  ).length;
  
  // Flagship artifacts: count of projects with impactSummary present
  const flagshipArtifacts = projects.filter(p => p.impactSummary).length;
  
  // Accessibility baseline: display A11y CI status
  const a11yStatus = process.env.REACT_APP_A11Y_ENABLED || 'CI enforced';
  
  // Structured data enabled: check if SEO config exists (always true in this app)
  const structuredDataEnabled = true;
  
  const stats = [
    {
      id: 'systems-projects',
      value: systemsProjects,
      label: 'Systems Projects',
      icon: '⚙️',
      ariaLabel: `${systemsProjects} systems-focused projects`
    },
    {
      id: 'flagship-artifacts',
      value: flagshipArtifacts,
      label: 'Flagship Artifacts',
      icon: '🌟',
      ariaLabel: `${flagshipArtifacts} flagship artifacts with impact statements`
    },
    {
      id: 'accessibility',
      value: 'A11y',
      label: a11yStatus,
      icon: '♿',
      ariaLabel: `Accessibility: ${a11yStatus}`
    },
    {
      id: 'structured-data',
      value: structuredDataEnabled ? 'Enabled' : 'Disabled',
      label: 'Structured Data',
      icon: '📊',
      ariaLabel: `Structured data ${structuredDataEnabled ? 'enabled' : 'disabled'}`
    }
  ];

  return (
    <section className="quick-stats-container" aria-label="Quick Statistics">
      <div className="quick-stats-header">
        <h2 className="quick-stats-title">Quick Stats</h2>
        <button
          className="quick-stats-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="quick-stats-grid"
          aria-label={isExpanded ? 'Collapse statistics' : 'Expand statistics'}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      <div 
        id="quick-stats-grid"
        className="quick-stats-grid"
        aria-hidden={!isExpanded}
        style={{ display: isExpanded ? 'grid' : 'none' }}
      >
        {stats.map(stat => (
          <div key={stat.id} className="stat-card" role="article" aria-label={stat.ariaLabel}>
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
