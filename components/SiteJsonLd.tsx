export default function SiteJsonLd() {
  const siteUrl = "https://www.govtpayindia.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "GovtPayGuide",
        url: `${siteUrl}/`,
        description:
          "GovtPayGuide is an independent informational website covering government salary, Dearness Allowance, Pay Commission, pay matrix, pension, allowances and related calculators. It is not an official Government website or Government payment portal.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "GovtPayGuide",
        description:
          "Independent information, guides and calculators for government salary, DA, Pay Commission, pay matrix and pension. GovtPayGuide does not process Government payments or provide official Government services.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
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