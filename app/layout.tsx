import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.secureshieldinsurance.in"),
  title: "Protect What Matters Most | SecureShield Insurance India",
  description: "Compare the best insurance plans from India's leading insurers. Get expert guidance and quotes in 2 minutes for Vehicle, Life, Health, Term, Travel, Home, and Business Insurance. Dedicated claim support.",
  keywords: "insurance india, vehicle insurance, health insurance, life insurance, term plan, travel insurance, claim support, best premium rates, secure shield insurance",
  authors: [{ name: "SecureShield Insurance India" }],
  openGraph: {
    title: "Protect What Matters Most | SecureShield Insurance India",
    description: "Compare the best insurance plans from India's leading insurers. Get expert guidance and quotes in 2 minutes for Vehicle, Life, Health, Term, Travel, Home, and Business Insurance.",
    type: "website",
    locale: "en_IN",
    url: "https://www.secureshieldinsurance.in",
    siteName: "SecureShield Insurance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SecureShield Insurance India - Compare & Save",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protect What Matters Most | SecureShield Insurance India",
    description: "Compare the best insurance plans from India's leading insurers. Get quotes in 2 minutes.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.secureshieldinsurance.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "SecureShield Insurance India",
    "alternateName": "SecureShield Insurance",
    "description": "Compare the best insurance plans from India's leading insurers. Get expert guidance and claim assistance.",
    "url": "https://www.secureshieldinsurance.in",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "102, Premium Plaza, M.G. Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    "sameAs": [
      "https://facebook.com/secureshield",
      "https://twitter.com/secureshield",
      "https://instagram.com/secureshield",
      "https://linkedin.com/company/secureshield"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-gray-900 selection:bg-primary selection:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
