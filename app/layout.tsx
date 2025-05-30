import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sandeep Mewara - Full Stack Software Engineer",
  description:
    "Portfolio of Sandeep Mewara, a Full Stack Software Engineer with 3 years of experience in JavaScript, React.js, Node.js, MySQL, Next.js, and AWS.",
  keywords: [
    "Sandeep Mewara",
    "Full Stack Developer",
    "Software Engineer",
    "React.js",
    "Node.js",
    "Next.js",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "AWS",
    "Portfolio",
    "Web Developer Bhopal"
  ],
  authors: [{ name: "Sandeep Mewara", url: "https://github.com/Sandeep-tech0" }],
  creator: "Sandeep Mewara",
  openGraph: {
    title: "Sandeep Mewara - Full Stack Software Engineer",
    description: "Portfolio of Sandeep Mewara, a Full Stack Software Engineer with 3 years of experience in JavaScript, React.js, Node.js, MySQL, Next.js, and AWS.",
    url: "https://your-portfolio-domain.com", // Replace with your actual domain
    siteName: "Sandeep Mewara Portfolio",
    images: [
      {
        url: "/og-image.png", // Place a social preview image in public/ as og-image.png
        width: 1200,
        height: 630,
        alt: "Sandeep Mewara Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Mewara - Full Stack Software Engineer",
    description: "Portfolio of Sandeep Mewara, a Full Stack Software Engineer with 3 years of experience in JavaScript, React.js, Node.js, MySQL, Next.js, and AWS.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle if available
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'