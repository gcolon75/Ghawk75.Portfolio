/**
 * OG Image Generator Utility
 * 
 * For a static site without SSR, we use existing project images
 * or a default fallback. Future enhancement: build-time generation.
 */

const SITE_URL = 'https://gcolon75.github.io/Ghawk75.Portfolio';

/**
 * Generate OG image URL for a project
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
 */
export function getDefaultOGImage() {
  return `${SITE_URL}/logo512.png`;
}

const ogImageUtils = {
  getProjectOGImage,
  getDefaultOGImage
};

export default ogImageUtils;
