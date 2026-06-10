import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theautomateddollar.com"),
  title: "The Automated Dollar — AI systems that run your money",
  description:
    "We build AI systems that run your money — and show the receipts. Automated budgets, fee hunts, subscription audits, and money systems you can copy. Educational content, not financial advice.",
  openGraph: {
    title: "The Automated Dollar",
    description:
      "AI systems that run your money. Receipts included. New builds weekly.",
    url: "https://theautomateddollar.com",
    siteName: "The Automated Dollar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
