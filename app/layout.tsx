import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google'

import './globals.css'

const font = Poppins({ 
  subsets: ['latin'],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})

export const metadata: Metadata = {
  title: 'Learning Management System',
  description: 'Learning Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
