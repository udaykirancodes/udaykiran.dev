import { ThemeProvider } from "@/components/providers/theme-provider"
import { PageViewAnalytics } from "@/components/site/analytics"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SITE_INFO, USER } from "@/data"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: SITE_INFO.siteName,
    default: SITE_INFO.siteName,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.fullName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.fullName,
  openGraph: {
    siteName: SITE_INFO.siteName,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: USER.twitterUsername, // Twitter username
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-192x192.png", sizes: "192x192" },
      { url: "/favicon-512x512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full antialiased`}
      >
        <PageViewAnalytics />
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </TooltipProvider>
        {process.env.NODE_ENV !== "development" && (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="d1c58d41-ef25-43f0-89e8-ca35a7028bd6"
          ></Script>
        )}
      </body>
    </html>
  )
}
