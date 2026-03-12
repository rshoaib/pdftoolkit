export default function SEO({ schemaType, schemaData }) {
  if (!schemaData) return null;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType || "WebApplication",
    ...schemaData
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
    />
  );
}
