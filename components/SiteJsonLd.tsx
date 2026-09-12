export default function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://govtpayindia.com/#organization",
        name: "GovtPayGuide",
        url: "https://govtpayindia.com/",
        description:
          "Independent informational website covering government salary, Dearness Allowance, Pay Commission, pay matrix, pension and related calculators.",
      },
      {
        "@type": "WebSite",
        "@id": "https://govtpayindia.com/#website",
        url: "https://govtpayindia.com/",
        name: "GovtPayGuide",
        description:
          "Government salary, DA, Pay Commission, pay matrix, pension and calculator information for Central and State Government employees.",
        publisher: {
          "@id": "https://govtpayindia.com/#organization",
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