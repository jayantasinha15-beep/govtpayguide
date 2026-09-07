export default function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://govtpayguide.in/#organization",
        name: "GovtPayGuide",
        url: "https://govtpayguide.in/",
        description:
          "Independent informational website covering government salary, Dearness Allowance, Pay Commission, pay matrix, pension and related calculators.",
      },
      {
        "@type": "WebSite",
        "@id": "https://govtpayguide.in/#website",
        url: "https://govtpayguide.in/",
        name: "GovtPayGuide",
        description:
          "Government salary, DA, Pay Commission, pay matrix, pension and calculator information for Central and State Government employees.",
        publisher: {
          "@id": "https://govtpayguide.in/#organization",
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