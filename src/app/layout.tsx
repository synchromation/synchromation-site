import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Synchromation - iOS Development Consultancy",
    template: "%s | Synchromation"
  },
  description: "Professional iOS development consultancy specializing in iPhone and iPad applications. Expert Swift and SwiftUI development serving clients since 2009.",
  keywords: ["iOS development", "iPhone apps", "iPad apps", "Swift", "SwiftUI", "mobile app development", "UK consultancy", "London", "Nick Banks"],
  authors: [{ name: "Nick Banks", url: "https://synchromation.com" }],
  creator: "Nick Banks",
  publisher: "Synchromation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://synchromation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://synchromation.com',
    title: 'Synchromation - iOS Development Consultancy',
    description: 'Professional iOS development consultancy specializing in iPhone and iPad applications. Expert Swift and SwiftUI development serving clients since 2009.',
    siteName: 'Synchromation',
    images: [
      {
        url: '/synchromation-logo.png',
        width: 1585,
        height: 335,
        alt: 'Synchromation iOS Development Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synchromation - iOS Development Consultancy',
    description: 'Professional iOS development consultancy specializing in iPhone and iPad applications. Expert Swift and SwiftUI development serving clients since 2009.',
    images: ['/synchromation-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // You'll need to add this later
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
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
