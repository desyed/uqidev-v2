export default function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UQIDEV",
    url: "https://uqidev.com",
    logo: "https://uqidev.com/logo.png",
    sameAs: [
      "https://facebook.com/uqidev",
      "https://twitter.com/uqidev",
      "https://linkedin.com/company/uqidev",
      "https://instagram.com/uqidev",
    ],
    description:
      "Professional development resources starting at just $35 USD. Quality work without the premium price tag.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "customer service",
      email: "contact@uqidev.com",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "35",
      highPrice: "75",
      priceCurrency: "USD",
      offerCount: "3",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function ServiceStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "UQIDEV",
    },
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Full-stack development services for your digital presence",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "35",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Development",
            description: "Native and cross-platform mobile applications",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "50",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "User-centered design for optimal experiences",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "45",
            priceCurrency: "USD",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

