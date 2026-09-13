type CalculatorJsonLdProps = {
  name: string;
  description: string;
  url: string;
};

export default function CalculatorJsonLd({
  name,
  description,
  url,
}: CalculatorJsonLdProps) {
  const baseUrl = "https://www.govtpayindia.com";

  const fullUrl = url.startsWith("http")
    ? url
    : `${baseUrl}${url}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${fullUrl}#webapplication`,

    name,
    description,
    url: fullUrl,

    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    inLanguage: "en-IN",
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