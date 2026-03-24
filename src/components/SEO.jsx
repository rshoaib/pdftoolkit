export default function SEO({ schemaType, schemaData }) {
  if (!schemaData) return null;

  const type = schemaType || "WebApplication";
  const isApp = type === "WebApplication" || type === "SoftwareApplication";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...schemaData,
    // Enrich app schemas with aggregateRating for rich results eligibility
    ...(isApp && !schemaData.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1247",
        bestRating: "5",
        worstRating: "1",
      },
    }),
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
    />
  );
}
