import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/global.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wovrex.site"),
  title: {
    default: "WOVREX | Revenue Intelligence for Established HVAC Companies",
    template: "%s | WOVREX",
  },
  description:
    "WOVREX helps established HVAC companies uncover hidden revenue leaks in missed calls, lapsed maintenance, abandoned estimates, and dispatch inefficiencies. No new software. Just clarity.",
  keywords: [
    "HVAC revenue intelligence",
    "HVAC business optimization",
    "missed call recovery HVAC",
    "HVAC revenue leaks",
    "HVAC estimate follow-up",
    "HVAC maintenance lapse",
    "HVAC dispatch routing",
    "HVAC business audit",
    "revenue recovery HVAC companies",
    "WOVREX",
  ],
  authors: [{ name: "WOVREX" }],
  creator: "WOVREX",
  publisher: "WOVREX",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wovrex.site",
    siteName: "WOVREX",
    title: "WOVREX | Revenue Intelligence for Established HVAC Companies",
    description:
      "WOVREX helps established HVAC companies uncover hidden revenue leaks in missed calls, lapsed maintenance, abandoned estimates, and dispatch inefficiencies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WOVREX - Revenue intelligence for established HVAC companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOVREX | Revenue Intelligence for Established HVAC Companies",
    description:
      "Uncover hidden revenue leaks in your HVAC business. Missed calls, lapsed maintenance, abandoned estimates.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://wovrex.site",
  },
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Caveat:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Jost:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
