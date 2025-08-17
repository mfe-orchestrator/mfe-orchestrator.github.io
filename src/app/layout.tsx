import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import GoogleAnalyticsCustom from "@/components/GoogleAnalyticsCustom";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MFE Orchestrator Hub",
  description: "Microfrontend orchestrator hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_SITE_VERIFICATION && <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_SITE_VERIFICATION} />}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}>
        <GoogleAnalyticsCustom />
        <ParticlesBackground />
        <Navigation />
        <main className="pt-20 min-h-screen">
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
