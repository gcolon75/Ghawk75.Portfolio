/**
 * Project Data Type Definitions
 * 
 * This file documents the structure of project data used throughout the portfolio.
 * Use these interfaces as reference when adding or modifying project entries.
 */

/**
 * Link to external resource (GitHub, live site, documentation, etc.)
 */
export interface ExternalLink {
  url: string;
  title: string;
  type: 'github' | 'website' | 'slides' | 'spreadsheet' | 'demo' | 'other';
}

/**
 * Asset associated with a project (image, video, document, etc.)
 */
export interface Asset {
  type: 'image' | 'video' | 'document';
  path: string;
  alt?: string;  // For images
  title?: string; // For documents/videos
  download?: boolean; // If asset should be downloadable
}

/**
 * Categorized tags for better organization
 */
export interface Tags {
  languages?: string[];      // Programming languages (e.g., "Python", "JavaScript")
  technologies?: string[];   // Technologies/frameworks (e.g., "React", "Discord API")
  disciplines?: string[];    // Disciplines (e.g., "UX Design", "Game Design")
  tools?: string[];          // Tools used (e.g., "Figma", "Wix")
  genres?: string[];         // Game genres (e.g., "Roguelike", "RPG")
  specialties?: string[];    // Special focus areas (e.g., "Dice Systems", "Gamification")
}

/**
 * Main Project interface
 * 
 * Each project should follow the Problem → Approach → Result pattern
 */
export interface Project {
  // Basic Info
  id: string;                    // Unique identifier (used in URLs)
  title: string;                 // Display title
  year: number;                  // Year of creation/completion
  type: 'game' | 'design' | 'website' | 'tool'; // Project category
  
  // Status (for in-progress projects)
  phase?: string;                // e.g., "Concept / Design", "Pre-MVP"
  progress?: number;             // 0-1 (0.20 = 20%)
  lastUpdated?: string;          // Date string
  
  // Content (Problem → Approach → Result pattern)
  summary: string;               // Brief summary (≤ 260 chars for SEO)
  tagline?: string;              // Short compelling tagline
  problem: string;               // What problem does this solve?
  approach: string;              // How did you approach the solution?
  result: string;                // What was the outcome/impact?
  
  // Role & Contributions
  role: string;                  // Your role(s) on the project
  whatISpecificallyDid: string[]; // Specific contributions (distinguishes ownership)
  
  // Technical Details
  techStack: string[];           // Flat array of tech (for backward compatibility)
  tags: Tags;                    // Categorized tags
  
  // Links & Assets
  internalLink: string;          // Link to project detail page
  externalLinks: ExternalLink[]; // External resources
  assets: Asset[];               // Images, videos, documents
  
  // Privacy & Display
  privacyFlags: string[];        // Privacy considerations (e.g., "concept-only", "no-metrics")
  featured: boolean;             // Should this be highlighted?
}

/**
 * Root data structure
 */
export interface ProjectData {
  projects: Project[];
}

/**
 * Filter options for project discovery
 */
export interface FilterOptions {
  type?: string;       // Filter by project type
  year?: number;       // Filter by year
  tech?: string;       // Filter by technology/tag
  featured?: boolean;  // Show only featured projects
  searchTerm?: string; // Free-text search
}
