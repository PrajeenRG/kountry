import type { Metadata } from "next";
import { Georama, Overpass } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { twMerge } from "tailwind-merge";

const georama = Georama({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-georama",
});

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

export const metadata: Metadata = {
  title: "Kountry | The navigator of the world",
  description:
    "Discover Kountry: your go-to for detailed, up-to-date info on every country—geography, history, economy, and culture. Explore the world with Kountry!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "bg-background font-sans antialiased",
          overpass.variable,
          georama.variable,
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
