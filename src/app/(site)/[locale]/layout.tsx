import { Geist, Geist_Mono } from 'next/font/google'

import type { Metadata } from 'next'

import '../../../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Folio-Metrics',
  description: 'Track your portfolio with ease',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}