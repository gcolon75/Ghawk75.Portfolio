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
  "jobTitle": "Game Designer, UX Designer, Developer",
  "knowsAbout": [
    "Game Design",
    "Systems Design",
    "UX Design",
    "UI Design",
    "React",
    "Python",
    "Figma"
  ]
});

/**
 * Generate CreativeWork structured data for a project
 */
export const getProjectStructuredData = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.summary,
  "creator": {
    "@type": "Person",
    "name": "Gabriel Colon"
  },
  "dateCreated": project.year ? `${project.year}-01-01` : undefined,
  "keywords": project.techStack.join(', '),
  "url": `https://gcolon75.github.io/Ghawk75.Portfolio${project.internalLink}`
});

export default SEO;
