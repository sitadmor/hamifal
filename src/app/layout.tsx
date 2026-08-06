import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "HAMIFAL",
    template: "%s · HAMIFAL",
  },
  description:
    "HAMIFAL builds technology companies, from first insight through product, customers, and company.",
  applicationName: "HAMIFAL",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "HAMIFAL",
    description: "We build technology companies.",
    type: "website",
    locale: "en_US",
    siteName: "HAMIFAL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "HAMIFAL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMIFAL",
    description: "We build technology companies.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
