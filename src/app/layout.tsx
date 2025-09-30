import './../styles/globals.css'
import { robotoMono, robotoSlab } from '@/lib/fonts'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Folio-Metrics',
  description: 'Track your portfolio with ease',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} ${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
