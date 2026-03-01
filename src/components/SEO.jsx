import { useEffect } from 'react';

const SEO = ({ title, description, schemaType, schemaData }) => {
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
      };
    }
  }, [title, description, schemaType, schemaData]);

  return null;
};

export default SEO;
