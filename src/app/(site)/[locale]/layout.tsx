import type { Metadata } from 'next'

import '../../../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { robotoMono, robotoSlab } from '@/lib/fonts'

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
          className={`${robotoSlab.variable} ${robotoMono.variable} antialiased`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}