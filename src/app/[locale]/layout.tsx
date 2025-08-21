import type { Metadata } from 'next'

import '../../lib/fontawesome'
import '../../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'

import { robotoMono, robotoSlab } from '@/lib/fonts'
import { loadMessages } from '@/i18n/loadMessages'

export const metadata: Metadata = {
  title: 'arbuz.tp',
  description: 'Front-end & Back-end Expert',
}

export default async function PublicLayout(props: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { children } = props
  const { locale } = await props.params

  const messages = await loadMessages(locale, ['public'])

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