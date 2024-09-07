import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost"
});

export const metadata: Metadata = {
  title: "Kountry | The navigator of the world",
  description: "Discover Kountry: your go-to for detailed, up-to-date info on every country—geography, history, economy, and culture. Explore the world with Kountry!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
