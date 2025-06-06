import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GlobalStudentFYI',
  description: 'Comprehensive data and resources for international students',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
