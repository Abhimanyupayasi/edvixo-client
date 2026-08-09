import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import RouteScrollToTop from "@/components/shared/RouteScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const SITE_URL = "https://edvixo.com";
export const SITE_NAME = "Edvixo - Digital Solutions & Tech Talent Company";
export const SITE_AUTHOR = "Edvixo";
export const SITE_TWITTER = "@edvixo";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL("https://edvixo.com"),

  title: {
    default: "Edvixo - Digital Solutions & Tech Talent for Growing Businesses",
    template: "%s | Edvixo",
  },

  description:
    "Edvixo is a digital solutions company helping businesses grow with custom websites, app experiences, development support, design, and digital transformation services.",

  keywords: [
    "edvixo",
    "digital solutions company",
    "web development company",
    "software company",
    "website design company",
    "business website agency",
    "tech talent company",
    "custom software development",
    "digital transformation company",
    "online store development",
    "booking system development",
    "local SEO services",
  ],

  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
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
    siteName: "Edvixo - Digital Solutions & Tech Talent",
    title: "Edvixo - Digital Solutions & Tech Talent for Growing Businesses",
    description:
      "Edvixo helps businesses with digital products, web development, design, and tech talent support for scalable growth.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Edvixo - Digital Solutions Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Edvixo - Digital Solutions & Tech Talent",
    description:
      "Digital solutions and product development company for growing businesses.",
    images: ["/og-home.jpg"],
    creator: "@edvixo",
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png" }],
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#071b2b" },
    { media: "(prefers-color-scheme: dark)", color: "#071b2b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className="font-sans antialiased bg-background text-on-background">
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