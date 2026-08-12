import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
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
  openGraph: {
    title: "Shikhar Tiwari — AI & Industrial Automation Engineer",
    description:
      "Connecting factory floors to intelligent systems. Industry 4.0 · IIoT · MES · Industrial AI.",
    url: "https://shikhartiwari.dev",
    siteName: "Shikhar Tiwari",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikhar Tiwari — AI & Industrial Automation Engineer",
    description:
      "Connecting factory floors to intelligent systems. Industry 4.0 · IIoT · MES · Industrial AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-base font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
