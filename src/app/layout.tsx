import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SkipToContent } from "@/components/skip-to-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Best Restaurant — Fine Dining in the Heart of Nepal",
  description:
    "Where the Himalayas meet haute cuisine. An intimate culinary journey forged in fire, rested in nature, and served with reverence. Reserve your table at The Best Restaurant.",
  keywords: [
    "fine dining",
    "Nepal",
    "restaurant",
    "Himalayan cuisine",
    "Lalitpur",
    "luxury dining",
  ],
  openGraph: {
    title: "The Best Restaurant — Fine Dining in the Heart of Nepal",
    description:
      "Where the Himalayas meet haute cuisine. Reserve your table today.",
    type: "website",
    locale: "en_US",
    siteName: "The Best Restaurant",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Restaurant",
    description:
      "Where the Himalayas meet haute cuisine. Reserve your table today.",
  },
};

function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "The Best Restaurant",
          image:
            "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80",
          url: "https://myfkingrestaurant.com",
          telephone: "+977-1-456-7890",
          priceRange: "$$$",
          servesCuisine: ["Himalayan", "Contemporary", "Farm-to-Table"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jhamsikhel Road",
            addressLocality: "Lalitpur",
            addressRegion: "Bagmati",
            postalCode: "44600",
            addressCountry: "NP",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.6761,
            longitude: 85.3143,
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
              ],
              opens: "11:00",
              closes: "22:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday", "Sunday"],
              opens: "08:00",
              closes: "13:00",
            },
          ],
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-charcoal text-cream">
        <SkipToContent />
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}