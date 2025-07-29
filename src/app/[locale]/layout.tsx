import { Geist, Geist_Mono, Roboto_Slab, Roboto_Mono } from 'next/font/google'

import type { Metadata } from 'next'

import '../../lib/fontawesome'
import '../../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const robotoSlab = Roboto_Slab({
  variable: '--font-roboto-slab',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'arbuz.tp',
  description: 'Front-end & Back-end Expert',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab.variable} ${robotoMono.variable} antialiased`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}