import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEO component for adding structured data and meta tags
 * Use this component on project detail pages to enhance SEO
 */
const SEO = ({ 
  title, 
  description, 
  type = 'website', 
  image,
  url,
  structuredData 
}) => {
  const siteUrl = 'https://gcolon75.github.io/Ghawk75.Portfolio';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/logo512.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Gabriel Colon Portfolio</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

/**
 * Generate Person structured data for portfolio owner
 */
export const getPersonStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gabriel Colon",
  "url": "https://gcolon75.github.io/Ghawk75.Portfolio",
  "jobTitle": "Systems Designer, Game Designer, UX Designer",
  "image": "https://gcolon75.github.io/Ghawk75.Portfolio/logo512.png",
  "sameAs": [
    "https://github.com/gcolon75",
    "https://www.linkedin.com/in/gabrielcolon75/"
  ],
  "email": "gcolon@ucsd.edu",
  "knowsAbout": [
    "Game Design",
    "Systems Design",
    "UX Design",
    "UI Design",
    "React",
    "Python",
    "Figma",
    "Performance Optimization",
    "Accessibility",
    "Game Mechanics"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of California, San Diego"
  }
});

/**
 * Generate CreativeWork structured data for a project
 */
export const getProjectStructuredData = (project) => {
  // Determine appropriate type based on project type
  let schemaType = "CreativeWork";
  if (project.type === "game") {
    schemaType = "VideoGame";
  } else if (project.type === "tool" || project.techStack?.some(tech => 
    tech.toLowerCase().includes('python') || tech.toLowerCase().includes('react'))) {
    schemaType = "SoftwareApplication";
  } else if (project.type === "design") {
    schemaType = "CreativeWork";
  }

  const baseData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": project.title,
    "description": project.summary,
    "creator": {
      "@type": "Person",
      "name": "Gabriel Colon"
    },
    "author": {
      "@type": "Person",
      "name": "Gabriel Colon"
    },
    "url": `https://gcolon75.github.io/Ghawk75.Portfolio${project.internalLink}`,
    "inLanguage": "en-US"
  };

  // Add optional fields if available
  if (project.year) {
    baseData.datePublished = `${project.year}-01-01`;
    baseData.dateCreated = `${project.year}-01-01`;
  }

  if (project.techStack && project.techStack.length > 0) {
    baseData.keywords = project.techStack.join(', ');
  }

  // Add tags as keywords
  if (project.tags) {
    const allTags = [];
    if (project.tags.disciplines) allTags.push(...project.tags.disciplines);
    if (project.tags.technologies) allTags.push(...project.tags.technologies);
    if (project.tags.specialties) allTags.push(...project.tags.specialties);
    if (project.tags.genres) allTags.push(...project.tags.genres);
    if (allTags.length > 0) {
      baseData.about = allTags.map(tag => ({
        "@type": "Thing",
        "name": tag
      }));
    }
  }

  // Add image if available
  if (project.assets && project.assets.length > 0) {
    const imageAsset = project.assets.find(a => a.type === 'image');
    if (imageAsset) {
      baseData.image = `https://gcolon75.github.io/Ghawk75.Portfolio${imageAsset.path.replace('..', '')}`;
    }
  }

  return baseData;
};

export default SEO;
