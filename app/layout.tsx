import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { PageTransition } from "@/components/page-transition"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "FreshSip - Premium Organic Juices | Bangalore",
  description:
    "Leading organic juice innovation in Bangalore. 100% organic fruits, cold-pressed, zero preservatives. Same-day delivery within 50km.",
  keywords: "organic juice, cold pressed, fresh juice delivery, Bangalore",
  generator: "v0.app",
  openGraph: {
    title: "FreshSip - Premium Organic Juices",
    description: "Cold-pressed organic juices delivered fresh to your doorstep",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#2FB46A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300`}
      >
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
