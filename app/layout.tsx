import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Builder.io Integration Reference | CMS Tools Tutorials',
  description: 'Comprehensive developer guide and code reference for integrating Builder.io with Next.js. Includes real-world examples, patterns, and best practices.',
  keywords: ['Builder.io', 'Next.js', 'CMS', 'headless', 'integration', 'tutorial', 'reference'],
  authors: [{ name: 'Sai Prasad' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}
