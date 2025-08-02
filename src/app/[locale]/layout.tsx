import type { Metadata } from 'next'

import '../../lib/fontawesome'
import '../../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { robotoMono, robotoSlab } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'arbuz.tp',
  description: 'Front-end & Back-end Expert',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${robotoSlab.variable} ${robotoMono.variable} antialiased`}>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}