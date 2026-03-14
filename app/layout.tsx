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
  title: {
    default: "Hermes Juan · Product Designer — Asunción, Paraguay",
    template: "%s | Hermes Juan",
  },
  description:
    "Portfolio of Hermes Juan González Stark, a senior product designer based in Asunción, Paraguay. Founder of 55.design. Specializing in UX/UI, design systems, and digital product strategy.",
  metadataBase: new URL("https://hermesjuan.com"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    siteName: "Hermes Juan — Product Designer",
    locale: "en_US",
    type: "website",
  },
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
