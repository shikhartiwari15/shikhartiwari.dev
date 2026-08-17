import type { Metadata, Viewport } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shikhartiwari.dev"),
  title: "Shikhar Tiwari — AI & Industrial Automation Engineer",
  description:
    "Software engineer building Industry 4.0 systems — connecting CNC machines, production lines, and MES to ERP and the cloud, and building toward industrial AI.",
  keywords: [
    "Shikhar Tiwari",
    "Industrial Automation Engineer",
    "Industry 4.0",
    "IIoT",
    "MES",
    "SCADA",
    "AI Engineer",
    "Predictive Maintenance",
  ],
  alternates: { canonical: "https://shikhartiwari.dev" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Shikhar Tiwari — AI & Industrial Automation Engineer",
    description:
      "Connecting factory floors to intelligent systems. Industry 4.0 · IIoT · MES · Industrial AI.",
    url: "https://shikhartiwari.dev",
    siteName: "Shikhar Tiwari",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Shikhar Tiwari — AI & Industrial Automation Engineer" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikhar Tiwari — AI & Industrial Automation Engineer",
    description:
      "Connecting factory floors to intelligent systems. Industry 4.0 · IIoT · MES · Industrial AI.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070A0F" },
    { media: "(prefers-color-scheme: light)", color: "#F0F3F7" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shikhar Tiwari",
  jobTitle: "AI & Industrial Automation Engineer",
  url: "https://shikhartiwari.dev",
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  knowsAbout: [
    "Industry 4.0",
    "Industrial IoT",
    "MES",
    "SCADA",
    "PLC",
    "Predictive Maintenance",
    "Machine Learning",
  ],
  sameAs: ["https://www.linkedin.com/in/shikhartiwari15", "https://github.com/shikhartiwari15"],
};

// Sets the theme class before paint to avoid a flash of the wrong theme.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-base font-sans text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
