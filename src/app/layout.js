import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Clean City Waste | Calgary's #1 Waste Management & Bin Rental Service",
  description:
    "Professional residential, commercial & industrial waste management in Calgary. Reliable bin rentals, scheduled pickups, recycling & organic services. Serving Calgary & surrounding areas since 2009.",
  keywords: [
    "waste management Calgary",
    "bin rental Calgary",
    "garbage pickup Calgary",
    "commercial waste disposal Calgary",
    "residential garbage collection Calgary",
    "industrial waste management Calgary",
    "recycling services Calgary",
    "organic waste collection Calgary",
    "4 yard bin rental Calgary",
    "6 yard bin rental Calgary",
    "8 yard bin rental Calgary",
    "Calgary waste company",
    "waste disposal Calgary",
    "garbage bin rental Calgary",
    "commercial garbage pickup Calgary",
    "construction waste removal Calgary",
    "restaurant waste management Calgary",
    "apartment waste services Calgary",
    "eco-friendly waste disposal Calgary",
    "Calgary recycling company",
  ],
  authors: [{ name: "Clean City Waste" }],
  creator: "Clean City Waste",
  publisher: "Clean City Waste",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://cleancitywaste.ca",
    siteName: "Clean City Waste",
    title: "Clean City Waste | Calgary's Premier Waste Management Service",
    description:
      "Trusted residential, commercial & industrial waste management services in Calgary. Professional bin rentals, reliable pickups, and eco-friendly disposal solutions.",
    images: [
      {
        url: "https://cleancitywaste.ca/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clean City Waste - Professional Waste Management Services in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean City Waste | Calgary's #1 Waste Management Service",
    description:
      "Reliable residential, commercial & industrial waste management in Calgary. Bin rentals, scheduled pickups & recycling services.",
    images: ["https://cleancitywaste.ca/images/og-image.jpg"],
    creator: "@CleanCityWaste",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://cleancitywaste.ca",
  },
  category: "Business and Industrial Services",
  metadataBase: new URL("https://cleancitywaste.ca"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white`}
      >
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
