type Item = {
  name: string;
  path: string;
};

type BreadcrumbProps = {
  items: Item[];
};

export default function BreadcrumbJsonLd({
  items,
}: BreadcrumbProps) {
  const baseUrl = "https://govtpayindia.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
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
