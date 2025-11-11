/**
 * OG Image Generator Utility
 * 
 * For a static site without SSR, we use existing project images
 * or a default fallback.
 * 
 * Space Theme Guidelines for OG Images:
 * - Use a dark starfield gradient background (#0b0c10 to #1f2833)
 * - Add subtle stars/particles using radial gradients
 * - Apply a ring accent around the project title using #66fcf1
 * - Ensure high contrast for legibility (WCAG AA minimum)
 * - Recommended dimensions: 1200x630px (standard OG image size)
 * - Use Figma/Photoshop template for consistency
 * 
 * Future enhancement: Build-time image generation with canvas/sharp
 */

const SITE_URL = 'https://gcolon75.github.io/Ghawk75.Portfolio';

/**
 * Generate OG image URL for a project
 * 
 * Prioritizes project-specific images over default logo.
 * All project images should follow space theme guidelines.
 */
export function getProjectOGImage(project) {
  if (!project) {
    return `${SITE_URL}/logo512.png`;
  }

  // Check if project has an existing image
  if (project.assets && project.assets.length > 0) {
    const imageAsset = project.assets.find(a => a.type === 'image');
    if (imageAsset) {
      // Convert relative path to absolute URL - remove all '../' occurrences
      const imagePath = imageAsset.path.replace(/\.\.\//g, '/');
      return `${SITE_URL}${imagePath}`;
    }
  }
  
  return `${SITE_URL}/logo512.png`;
}

/**
 * Generate OG image for general pages
 * Returns the default portfolio logo with space theme
 */
export function getDefaultOGImage() {
  return `${SITE_URL}/logo512.png`;
}

const ogImageUtils = {
  getProjectOGImage,
  getDefaultOGImage
};

export default ogImageUtils;
