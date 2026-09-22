import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Jayanta Singha – Author and Developer",
  description:
    "Jayanta Singha is the author and developer of GovtPayGuide, an independent website covering government salary, pension, recruitment and job guides.",
  alternates: {
    canonical: "/author/jayanta-singha",
  },
};

export default function JayantaSinghaPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jayanta Singha",
    url: "https://www.govtpayindia.com/author/jayanta-singha",
    image:
    "https://www.govtpayindia.com/images/authors/jayanta-singha.png",
    jobTitle: "Author and Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "GovtPayGuide",
      url: "https://www.govtpayindia.com",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <section className="legal-hero">
  <div className="container author-profile-header">
    <Image
      src="/images/authors/jayanta-singha.png"
      alt="Jayanta Singha, author and developer of GovtPayGuide"
      width={180}
      height={180}
      className="author-profile-image"
      priority
    />

    <div>
      <span className="page-badge">Author</span>

      <h1>Jayanta Singha</h1>

      <p>
        Author and developer of GovtPayGuide.
      </p>
    </div>
  </div>
</section>

      <div className="container legal-content-container">
        <article className="legal-content">
          <section>
            <h2>About the Author</h2>

            <p>
              Jayanta Singha is the author and developer of GovtPayGuide,
              an independent informational website covering government
              salary, Dearness Allowance, Pay Commission, pension,
              calculators, recruitment notifications and job guides.
            </p>

            <p>
              He prepares explanatory content using publicly available
              government notifications, recruitment advertisements and
              official departmental sources.
            </p>
          </section>

          <section>
            <h2>Editorial Approach</h2>

            <p>
              Articles are written to make complex salary, pension and
              recruitment information easier to understand. Readers are
              encouraged to verify important information through the
              relevant official authority.
            </p>
          </section>

          <Link href="/contact" className="content-button">
            Contact GovtPayGuide
          </Link>
        </article>
      </div>
    </main>
  );
}