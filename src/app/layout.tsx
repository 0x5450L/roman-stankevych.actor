import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roman Stankevych — Actor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
