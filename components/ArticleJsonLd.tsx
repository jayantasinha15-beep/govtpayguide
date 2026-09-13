type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
};

export default function ArticleJsonLd({
  title,
  description,
  url,
}: ArticleJsonLdProps) {
  const baseUrl = "https://www.govtpayindia.com";
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${fullUrl}#article`,
    headline: title,
    description,
    url: fullUrl,
    inLanguage: "en-IN",

    author: {
      "@type": "Organization",
      name: "GovtPayGuide",
    },

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    mainEntityOfPage: fullUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}