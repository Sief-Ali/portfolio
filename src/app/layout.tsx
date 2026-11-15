import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sief Ali — Embedded Systems & Full-Stack Developer",
    template: "%s | Sief Ali",
  },
  description:
    "Portfolio of Sief Ali: student developer working across embedded systems, microcontroller firmware (ATmega32, FreeRTOS), backend architecture, and full-stack web products.",
  keywords: [
    "Sief Ali",
    "Embedded Systems",
    "FreeRTOS",
    "ATmega32",
    "DECI",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Egypt",
    "Software Engineer",
    "Madarek",
  ],
  authors: [{ name: "Sief Ali", url: "https://github.com/Sief-Ali" }],
  creator: "Sief Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Sief-Ali",
    title: "Sief Ali — Embedded Systems & Full-Stack Developer",
    description:
      "Student developer working across embedded systems, microcontroller firmware, backend architecture, and web applications.",
    siteName: "Sief Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sief Ali — Embedded Systems & Full-Stack Developer",
    description:
      "Student developer working across embedded systems, microcontroller firmware, backend architecture, and web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
