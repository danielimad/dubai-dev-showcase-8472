import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ahmed Hassan - Dubai Web Developer',
  description: 'Professional web developer in Dubai specializing in modern web applications using React, Next.js, and TypeScript.',
  keywords: 'web developer Dubai, React developer UAE, Next.js developer, TypeScript developer Dubai',
  openGraph: {
    title: 'Ahmed Hassan - Dubai Web Developer',
    description: 'Professional web developer in Dubai specializing in modern web applications',
    url: 'https://ahmed-dev.ae',
    siteName: 'Ahmed Hassan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}