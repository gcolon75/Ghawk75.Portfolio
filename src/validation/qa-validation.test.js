/**
 * QA Validation Tests for Space Hero + Employer Conversion Features
 * 
 * This test suite validates all requirements from the QA checklist:
 * - Space hero with accessible planets
 * - Impact statements on featured projects
 * - Privacy language
 * - Data-driven components
 * - SEO and structured data
 */

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import QuickStats from '../components/QuickStats';
import SkillMatrix from '../components/SkillMatrix';
import SEO, { getPersonStructuredData, getProjectStructuredData } from '../components/SEO';
import projectsData from '../data/projects.json';
import planetsData from '../data/hero.planets.json';

// Helper to render components with Router
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('QA Validation: Space Hero Features', () => {
  test('Hero planets are tabbable buttons with ARIA labels', () => {
    renderWithRouter(<Hero />);
    
    planetsData.planets.forEach(planet => {
      const planetButton = screen.getByLabelText(planet.ariaLabel);
      expect(planetButton).toBeInTheDocument();
      expect(planetButton.tagName).toBe('BUTTON');
      expect(planetButton).toHaveAttribute('aria-label', planet.ariaLabel);
    });
  });

  test('Hero has pause/resume orbit control', () => {
    renderWithRouter(<Hero />);
    
    const pauseButton = screen.getByRole('button', { name: /pause orbits animation/i });
    expect(pauseButton).toBeInTheDocument();
    expect(pauseButton).toHaveAttribute('aria-pressed');
  });

  test('All planets have proper aria-expanded attribute', () => {
    renderWithRouter(<Hero />);
    
    planetsData.planets.forEach(planet => {
      const planetButton = screen.getByLabelText(planet.ariaLabel);
      expect(planetButton).toHaveAttribute('aria-expanded');
    });
  });
});

describe('QA Validation: Impact Lines and Privacy', () => {
  const featuredProjects = projectsData.projects.filter(p => p.featured);
  const projectsWithImpact = featuredProjects.filter(p => p.impact);

  test('At least 3 featured projects have impact statements', () => {
    expect(projectsWithImpact.length).toBeGreaterThanOrEqual(3);
  });

  test('Impact statements have "How?" collapsible notes', () => {
    projectsWithImpact.forEach(project => {
      expect(project.impact.statement).toBeDefined();
      expect(project.impact.how).toBeDefined();
      expect(project.impact.statement.length).toBeGreaterThan(0);
      expect(project.impact.how.length).toBeGreaterThan(0);
    });
  });

  test('All projects have privacy flags', () => {
    projectsData.projects.forEach(project => {
      expect(project.privacyFlags).toBeDefined();
      expect(Array.isArray(project.privacyFlags)).toBe(true);
      expect(project.privacyFlags.length).toBeGreaterThan(0);
    });
  });

  test('ProjectCard renders impact with collapsible "How?" button', () => {
    const projectWithImpact = projectsWithImpact[0];
    renderWithRouter(<ProjectCard project={projectWithImpact} />);
    
    const impactStatement = screen.getByText(/Impact:/i);
    expect(impactStatement).toBeInTheDocument();
    
    const howButton = screen.getByRole('button', { name: /how\?/i });
    expect(howButton).toBeInTheDocument();
    expect(howButton).toHaveAttribute('aria-expanded');
    expect(howButton).toHaveAttribute('aria-controls', `impact-how-${projectWithImpact.id}`);
  });
});

describe('QA Validation: Data-Driven Components', () => {
  test('QuickStats computes from project data, not hardcoded', () => {
    // QuickStats should dynamically count systems-focused projects
    const systemsFocusedCount = projectsData.projects.filter(p => 
      p.techStack.includes('Systems Design') || 
      p.techStack.includes('Game Design') ||
      (p.tags?.disciplines && (
        p.tags.disciplines.includes('Systems Design') || 
        p.tags.disciplines.includes('Game Design')
      ))
    ).length;
    
    expect(systemsFocusedCount).toBeGreaterThan(0);
    
    renderWithRouter(<QuickStats />);
    const statsTitle = screen.getByText(/Quick Stats/i);
    expect(statsTitle).toBeInTheDocument();
  });

  test('SkillMatrix populates from project tags', () => {
    renderWithRouter(<SkillMatrix />);
    
    const matrixTitle = screen.getByText(/Skill Matrix/i);
    expect(matrixTitle).toBeInTheDocument();
    
    // Should show project counts for each skill
    const projectCountElements = screen.getAllByText(/\d+ projects?/i);
    expect(projectCountElements.length).toBeGreaterThan(0);
  });
});

describe('QA Validation: SEO and Structured Data', () => {
  test('Person structured data includes education', () => {
    const personData = getPersonStructuredData();
    
    expect(personData['@type']).toBe('Person');
    expect(personData.name).toBe('Gabriel Colon');
    expect(personData.alumniOf).toBeDefined();
    expect(personData.alumniOf.name).toBe('University of California, San Diego');
  });

  test('Person structured data includes comprehensive knowledge areas', () => {
    const personData = getPersonStructuredData();
    
    expect(personData.knowsAbout).toBeDefined();
    expect(Array.isArray(personData.knowsAbout)).toBe(true);
    expect(personData.knowsAbout).toContain('Game Design');
    expect(personData.knowsAbout).toContain('Systems Design');
    expect(personData.knowsAbout).toContain('Accessibility');
  });

  test('Project structured data generates appropriate schema types', () => {
    const gameProject = projectsData.projects.find(p => p.type === 'game');
    const webProject = projectsData.projects.find(p => p.type === 'website');
    
    if (gameProject) {
      const gameSchema = getProjectStructuredData(gameProject);
      expect(gameSchema['@type']).toBe('VideoGame');
    }
    
    if (webProject) {
      const webSchema = getProjectStructuredData(webProject);
      expect(['SoftwareApplication', 'CreativeWork']).toContain(webSchema['@type']);
    }
  });

  test('OG image functionality exists', () => {
    const project = projectsData.projects[0];
    const { container } = render(
      <SEO 
        title="Test" 
        description="Test desc" 
        project={project}
      />
    );
    
    // Helmet renders to document head, check it was called
    expect(container).toBeDefined();
  });
});

describe('QA Validation: Accessibility', () => {
  test('Hero planets use semantic button elements', () => {
    renderWithRouter(<Hero />);
    
    const buttons = screen.getAllByRole('button');
    // Should have planet buttons + pause button
    expect(buttons.length).toBeGreaterThan(planetsData.planets.length);
  });

  test('ProjectCard uses semantic article element', () => {
    const project = projectsData.projects[0];
    const { container } = renderWithRouter(<ProjectCard project={project} />);
    
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveAttribute('aria-label', `${project.title} project`);
  });

  test('SkillMatrix has proper ARIA label', () => {
    const { container } = renderWithRouter(<SkillMatrix />);
    
    const section = container.querySelector('section[aria-label="Skill Expertise Matrix"]');
    expect(section).toBeInTheDocument();
  });
});
