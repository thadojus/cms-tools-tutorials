import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CMS Tools Tutorials',
  description: 'Web pages for CMS tools tutorials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
