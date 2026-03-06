import { useEffect } from 'react';

const SEO = ({ title, description, schemaType, schemaData, canonicalUrl }) => {
  useEffect(() => {
    // We optionally update the document title and description if provided dynamically
    if (title) {
      document.title = title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = title;
    }
    
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content = description;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = description;
    }

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;

      // Also update og:url
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.content = canonicalUrl;
    }

    // JSON-LD Injection
    if (schemaType && schemaData) {
      const scriptId = `schema-${schemaType}`;
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = scriptId;
        document.head.appendChild(script);
      }
      
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": schemaType,
        ...schemaData
      });
      
      return () => {
        // Cleanup schema on unmount to prevent duplicates across navigations
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
        // Cleanup canonical
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink && canonicalLink.parentNode) {
          canonicalLink.parentNode.removeChild(canonicalLink);
        }
      };
    }
  }, [title, description, schemaType, schemaData, canonicalUrl]);

  return null;
};

export default SEO;

