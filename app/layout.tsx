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
