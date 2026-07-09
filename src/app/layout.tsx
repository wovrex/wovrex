import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, IBM_Plex_Mono, Barlow_Condensed } from "next/font/google";
import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  preload: false,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-barlow",
  preload: false,
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

export const viewport = {
  themeColor: "#F9F8F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} ${ibmPlexMono.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Preload Qurova Medium — used in Preloader, must load before first paint */}
        <link
          rel="preload"
          href="/fonts/qurova/QurovaDEMO-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/qurova/QurovaDEMO-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning className={`${plusJakarta.variable} ${outfit.variable} ${ibmPlexMono.variable} ${barlowCondensed.variable}`} style={{ backgroundColor: '#F9F8F6' }}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
