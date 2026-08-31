import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";

import RouteScrollToTop from "@/components/shared/RouteScrollToTop";
import { Toaster } from "@/components/ui/sonner";

import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  SITE_TWITTER,
  DEFAULT_OG_IMAGE,
} from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default:
      "Edvixo | Digital Solutions & Software Development Company",
    template: "%s | Edvixo",
  },

  description:
    "Edvixo helps growing businesses build better digital experiences through web development, app development, design, automation, dedicated developers, cloud solutions, and digital transformation.",

  keywords: [
    "Edvixo",
    "digital solutions company",
    "software development company",
    "web development company",
    "app development company",
    "website development",
    "custom software development",
    "UI UX design",
    "business automation",
    "dedicated developers",
    "cloud and DevOps",
    "digital transformation",
  ],

  authors: [
    {
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
  ],

  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,

    title:
      "Edvixo | Digital Solutions & Software Development Company",

    description:
      "Digital solutions for growing businesses — from websites and apps to automation, cloud, dedicated developers, and digital transformation.",

    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt:
          "Edvixo - Digital Solutions and Software Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Edvixo | Digital Solutions & Software Development Company",

    description:
      "Digital solutions, software development, design, automation, cloud, and technology support for growing businesses.",

    images: ["/og-home.jpg"],

    creator: SITE_TWITTER,
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  },

  alternates: {
    canonical: SITE_URL,

    languages: {
      en: SITE_URL,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    shortcut: ["/favicon.png"],

    apple: [
      {
        url: "/favicon.png",
      },
    ],
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#071b2b",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#071b2b",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      

      <body className="bg-background font-sans antialiased text-on-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <RouteScrollToTop />
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}