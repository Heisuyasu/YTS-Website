import { contactInfo, serviceAreas, siteUrl } from "@/lib/data";

/**
 * LocalBusiness structured data (JSON-LD) — helps Google show the
 * company's hours, location, and contact info in Search and Maps.
 */
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: contactInfo.company,
    description:
      "Trucking and cargo transportation services across the entire province of Palawan, Philippines.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    email: contactInfo.email,
    telephone: contactInfo.mobile,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Abueg Road, Barangay Bancao-Bancao",
      addressLocality: "Puerto Princesa City",
      addressRegion: "Palawan",
      addressCountry: "PH",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: serviceAreas.map((a) => ({
      "@type": "Place",
      name: `${a.name}, Palawan, Philippines`,
    })),
    sameAs: [contactInfo.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
