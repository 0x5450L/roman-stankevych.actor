import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const SITE_URL = "https://romanstankevych.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Roman Stankevych — Actor | Action & Comedic Actor | MoCap",
  description:
    "Roman Stankevych is a versatile actor based in Munich: action, drama, comedy and motion capture. Showreels, photos, credits and CV.",
  openGraph: {
    title: "Roman Stankevych — Actor",
    description: "Actor | Action & Comedic Actor | MoCap Specialist. Munich, available worldwide.",
    images: [{ url: "/images/social-preview-1200x630.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
