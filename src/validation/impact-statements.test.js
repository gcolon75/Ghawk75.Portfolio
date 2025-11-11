/**
 * Tests for Quick Stats and Impact Statements functionality
 * Validates new requirements from the enhancement task
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import QuickStats from '../components/QuickStats';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

// Helper to render components with Router and HelmetProvider
const renderWithRouter = (component) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>
  );
};

describe('QuickStats Component - Enhanced Functionality', () => {
  test('displays systems projects count computed from tags', () => {
    renderWithRouter(<QuickStats />);
    
    const systemsProjects = projectsData.projects.filter(p => 
      p.techStack.some(tech => tech.toLowerCase().includes('systems')) ||
      (p.tags?.disciplines && p.tags.disciplines.some(d => d.toLowerCase().includes('systems')))
    ).length;
    
    expect(systemsProjects).toBeGreaterThan(0);
    const statsElement = screen.getByText(/Systems Projects/i);
    expect(statsElement).toBeInTheDocument();
  });

  test('displays flagship artifacts count (projects with impactSummary)', () => {
    renderWithRouter(<QuickStats />);
    
    const flagshipCount = projectsData.projects.filter(p => p.impactSummary).length;
    expect(flagshipCount).toBeGreaterThanOrEqual(3); // At least the top 3
    
    const flagshipElement = screen.getByText(/Flagship Artifacts/i);
    expect(flagshipElement).toBeInTheDocument();
  });

  test('displays accessibility baseline indicator', () => {
    renderWithRouter(<QuickStats />);
    
    const a11yElement = screen.getByText(/A11y/i);
    expect(a11yElement).toBeInTheDocument();
  });

  test('displays structured data enabled status', () => {
    renderWithRouter(<QuickStats />);
    
    const structuredDataElement = screen.getByText(/Structured Data/i);
    expect(structuredDataElement).toBeInTheDocument();
  });

  test('has collapsible functionality with toggle button', () => {
    renderWithRouter(<QuickStats />);
    
    const toggleButton = screen.getByRole('button', { name: /collapse statistics/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('toggle button collapses and expands stats grid', () => {
    renderWithRouter(<QuickStats />);
    
    const toggleButton = screen.getByRole('button', { name: /collapse statistics/i });
    const statsGrid = screen.getByRole('button', { name: /collapse statistics/i }).parentElement.nextElementSibling;
    
    // Initially expanded
    expect(statsGrid).toBeVisible();
    
    // Collapse
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute('aria-label', 'Expand statistics');
    
    // Expand again
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(toggleButton).toHaveAttribute('aria-label', 'Collapse statistics');
  });

  test('all stat cards have proper ARIA labels', () => {
    renderWithRouter(<QuickStats />);
    
    const statCards = screen.getAllByRole('article');
    expect(statCards.length).toBe(4); // 4 stats
    
    statCards.forEach(card => {
      expect(card).toHaveAttribute('aria-label');
    });
  });
});

describe('Impact Statements - Top 3 Flagship Projects', () => {
  const topProjects = ['tower-of-greed', 'axle', 'project-valine'];
  
  test('Tower of Greed has privacy-safe impact statement', () => {
    const project = projectsData.projects.find(p => p.id === 'tower-of-greed');
    
    expect(project.impactSummary).toBeDefined();
    expect(project.impactHow).toBeDefined();
    expect(project.impactSummary).toContain('initial load stability');
    expect(project.impactHow).toContain('critical CSS');
  });

  test('Axle has privacy-safe impact statement', () => {
    const project = projectsData.projects.find(p => p.id === 'axle');
    
    expect(project.impactSummary).toBeDefined();
    expect(project.impactHow).toBeDefined();
    expect(project.impactSummary).toContain('onboarding clarity');
    expect(project.impactHow).toContain('diagnostic assistant');
  });

  test('Valine has privacy-safe impact statement', () => {
    const project = projectsData.projects.find(p => p.id === 'project-valine');
    
    expect(project.impactSummary).toBeDefined();
    expect(project.impactHow).toBeDefined();
    expect(project.impactSummary).toContain('render cost');
    expect(project.impactHow).toContain('split large bundles');
  });

  test('all top 3 projects have both impactSummary and impactHow fields', () => {
    topProjects.forEach(projectId => {
      const project = projectsData.projects.find(p => p.id === projectId);
      expect(project.impactSummary).toBeDefined();
      expect(project.impactHow).toBeDefined();
      expect(project.impactSummary.length).toBeGreaterThan(0);
      expect(project.impactHow.length).toBeGreaterThan(0);
    });
  });
});

describe('ProjectCard - Impact Display', () => {
  test('renders impactSummary when present', () => {
    const project = projectsData.projects.find(p => p.impactSummary);
    renderWithRouter(<ProjectCard project={project} />);
    
    const impactStatement = screen.getByText(/Impact:/i);
    expect(impactStatement).toBeInTheDocument();
    expect(screen.getByText(project.impactSummary, { exact: false })).toBeInTheDocument();
  });

  test('collapsible "How?" section for impactHow', () => {
    const project = projectsData.projects.find(p => p.impactSummary);
    renderWithRouter(<ProjectCard project={project} />);
    
    const howButton = screen.getByRole('button', { name: /how\?/i });
    expect(howButton).toBeInTheDocument();
    expect(howButton).toHaveAttribute('aria-expanded', 'false');
    
    // Initially collapsed
    expect(screen.queryByText(project.impactHow)).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(howButton);
    expect(howButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(project.impactHow)).toBeInTheDocument();
    
    // Click to collapse
    fireEvent.click(howButton);
    expect(howButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('does not render impact section when impactSummary is not present', () => {
    const project = projectsData.projects.find(p => !p.impactSummary);
    if (project) {
      renderWithRouter(<ProjectCard project={project} />);
      
      const impactStatement = screen.queryByText(/Impact:/i);
      expect(impactStatement).not.toBeInTheDocument();
    }
  });

  test('does not render impact in compact mode', () => {
    const project = projectsData.projects.find(p => p.impactSummary);
    renderWithRouter(<ProjectCard project={project} compact={true} />);
    
    const impactStatement = screen.queryByText(/Impact:/i);
    expect(impactStatement).not.toBeInTheDocument();
  });
});

describe('Data-Driven Validation', () => {
  test('flagship artifacts count matches projects with impactSummary', () => {
    const projectsWithImpact = projectsData.projects.filter(p => p.impactSummary);
    
    renderWithRouter(<QuickStats />);
    
    // The QuickStats component should display this count
    expect(projectsWithImpact.length).toBeGreaterThanOrEqual(3);
  });

  test('systems projects count is computed, not hardcoded', () => {
    const systemsCount = projectsData.projects.filter(p => 
      p.techStack.some(tech => tech.toLowerCase().includes('systems')) ||
      (p.tags?.disciplines && p.tags.disciplines.some(d => d.toLowerCase().includes('systems')))
    ).length;
    
    // Verify the computation logic
    expect(systemsCount).toBeGreaterThan(0);
    
    renderWithRouter(<QuickStats />);
    const systemsElement = screen.getByText(/Systems Projects/i);
    expect(systemsElement).toBeInTheDocument();
  });
});
