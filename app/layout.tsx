import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Jackson Lee",
  description: "Portfolio of Jackson Lee, a Software Engineer",
  generator: 'v0.dev',
  openGraph: {
      title: "Jackson Lee | Software Engineer",
      description: "Portfolio of Jackson Lee, a Software Engineer specializing in full-stack development",
      url: "https://jacksonleeee.com",
      siteName: "Jackson Lee Portfolio",
      images: [
        {
          url: "/open-graph-image.png",
          width: 1200,
          height: 630,
          alt: "Jackson Lee Portfolio Preview",
        }
      ],
      locale: "en_US",
      type: "website",
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'