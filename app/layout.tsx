import type { Metadata } from "next";
import { Barlow_Condensed, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Neil Preston Music",
  description: "Singer-songwriter. Perth, Western Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
