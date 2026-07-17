import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";

import { schoolSchema } from "@/lib/seo/school";

import { websiteSchema } from "@/lib/seo/website";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tunasteladan.vercel.app"),

  title: {
    default: "Sekolah Tunas Teladan Palembang",
    template: "%s | Sekolah Tunas Teladan Palembang",
  },

  description:
    "Website resmi Sekolah Tunas Teladan Palembang yang menyelenggarakan pendidikan TK, SD, dan SMP dengan pembelajaran berkualitas, karakter, prestasi, dan kreativitas.",

  category: "education",

  applicationName: "Sekolah Tunas Teladan Palembang",

  keywords: [
    "Sekolah Tunas Teladan",
    "Sekolah Tunas Teladan Palembang",
    "TK Palembang",
    "SD Palembang",
    "SMP Palembang",
    "Sekolah Swasta Palembang",
    "PPDB Palembang",
    "Sekolah Terbaik Palembang",
    "Pendidikan Palembang",
    "Sekolah Karakter",
  ],

  authors: [
    {
      name: "Sekolah Tunas Teladan Palembang",
    },
  ],

  creator: "Sekolah Tunas Teladan Palembang",

  publisher: "Sekolah Tunas Teladan Palembang",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tunasteladan.vercel.app",
    siteName: "Sekolah Tunas Teladan Palembang",

    title: "Sekolah Tunas Teladan Palembang",

    description:
      "Website resmi Sekolah Tunas Teladan Palembang yang menyelenggarakan pendidikan TK, SD, dan SMP dengan pembelajaran berkualitas, karakter, prestasi, dan kreativitas.",

    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Sekolah Tunas Teladan Palembang",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sekolah Tunas Teladan Palembang",
    description:
      "Website resmi Sekolah Tunas Teladan Palembang yang menyelenggarakan pendidikan TK, SD, dan SMP dengan pembelajaran berkualitas, karakter, prestasi, dan kreativitas.",
    images: ["/hero.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F4C81",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">
  {children}

  <JsonLd data={schoolSchema} />

  <JsonLd data={websiteSchema} />
</body>
    </html>
  );
}