
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://98auto.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "98Auto | Car Sourcing in Dubai, UAE",
    template: "%s | 98Auto",
  },

  description:
    "Looking to buy a car from Dubai? 98Auto helps international buyers source new and used cars from the UAE, compare vehicles and coordinate export documentation and worldwide delivery.",

  applicationName: "98Auto",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "98Auto",
    title: "98Auto | Car Sourcing in Dubai, UAE",
    description:
      "Your trusted car sourcing partner in Dubai. Find the right vehicle, compare options and coordinate international vehicle export and delivery.",
  },

  twitter: {
    card: "summary_large_image",
    title: "98Auto | Car Sourcing in Dubai, UAE",
    description:
      "Source your next car from Dubai. Personalised vehicle sourcing, export coordination and international delivery.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "98Auto",
  url: siteUrl,
  description:
    "Dubai-based car sourcing company helping international buyers find vehicles in the UAE and coordinate vehicle export and delivery.",
  areaServed: [
    "United Arab Emirates",
    "Saudi Arabia",
    "Kuwait",
    "South Africa",
    "Iran",
    "Bahrain",
    "United Kingdom",
  ],
  knowsAbout: [
    "Car sourcing",
    "Vehicle sourcing in Dubai",
    "UAE car exports",
    "International vehicle shipping",
    "Automotive procurement",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
