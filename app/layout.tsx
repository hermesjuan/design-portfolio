import type { Metadata } from "next";
import { Inter, Young_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-young-serif",
});

export const metadata: Metadata = {
  title: "Hermes Juan · Product Designer",
  description:
    "Portfolio of Hermes Juan, a product designer specializing in UI, UX and Product design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${youngSerif.variable} font-sans bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
