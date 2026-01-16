// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/common/navigation";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advocate Mahaveer Aacharya | Top Legal Services & Representation",
  description: "Get expert legal representation with Advocate Mahaveer Aacharya. Specializing in civil law, criminal defense, corporate law, and family disputes with 15+ years of experience. Free initial consultation available.",
  keywords: [
    "legal services", "advocate", "lawyer", "legal representation", 
    "court cases", "civil law", "criminal defense", "family law",
    "corporate law", "property disputes", "legal consultation",
    "Mahaveer Aacharya", "experienced lawyer", "legal advice"
  ],
  
  // Open Graph for social media sharing
  openGraph: {
    title: "Advocate Mahaveer Aacharya - Expert Legal Representation",
    description: "Professional legal services with 15+ years experience. Specializing in civil, criminal, and corporate law matters.",
    url: "https://www.advocate-mahaveer.vercel.app/",
    siteName: "Advocate Mahaveer Aacharya Legal Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.advocate-mahaveer.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advocate Mahaveer Aacharya - Professional Legal Services",
        type: "image/jpeg"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Advocate Mahaveer Aacharya | Expert Legal Services",
    description: "Get professional legal representation for civil, criminal, and corporate matters",
    images: ["https://www.advocate-mahaveer.vercel.app//images/twitter-card.jpg"],
    creator: "@AdvAacharya",
    site: "@AdvAacharya"
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Structured Data (JSON-LD) - This would typically be in a separate component
  // but included here for reference
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Advocate Mahaveer Aacharya Legal Services",
      "image": "https://www.advocate-mahaveer.vercel.app/images/logo.jpg",
      "@id": "https://www.advocate-mahaveer.vercel.app/",
      "url": "https://www.advocate-mahaveer.vercel.app/",
      "telephone": "+91-XXXXXXXXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Law Chambers",
        "addressLocality": "City Name",
        "postalCode": "XXXXXX",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
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
        "closes": "18:00"
      },
      "sameAs": [
        "https://x.com/ma_advocate_",
        "https://www.facebook.com/profile.php?id=61585677192977",
        "https://www.instagram.com/advocate.mahaveer.aacharya/",
        "https://www.linkedin.com/in/mahaveer-aacharya-6485483a2/"
      ]
    })
  },
  
  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/images/icon2.png", type: "image/png", sizes: "16x16" },
      { url: "/images/icon2.png", type: "image/png", sizes: "32x32" },
      { url: "/images/icon2.png", type: "image/png", sizes: "192x192" },
      { url: "/images/icon2.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://www.advocate-mahaveer.vercel.app/",
    languages: {
      "en-IN": "https://www.advocate-mahaveer.vercel.app/",
      "hi-IN": "https://www.advocate-mahaveer.vercel.app/hi",
    }
  },
  
  // Verification (for Google Search Console, Bing, etc.)
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      me: ["mahaveer.acharya@gmail.com"],
    }
  },
  
  // Authors
  authors: [
    { name: "Advocate Mahaveer Aacharya" },
    { name: "Legal Team", url: "https://www.advocate-mahaveer.vercel.app/" }
  ],
  
  category: "legal services",
  
  themeColor: "#1a365d",
  
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
