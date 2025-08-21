import '../../lib/fontawesome'
import '../../styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { cookies, headers } from 'next/headers'

import { robotoMono, robotoSlab } from '@/lib/fonts'
import { loadMessages } from '@/i18n/loadMessages'

export const metadata = {
  title: 'arbuz.tp',
  description: 'Front-end & Back-end Expert',
}
const DEFAULT_LOCALE = 'en'

export default async function AdminGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('locale')?.value

  const headersList = await headers()
  const headerLocale = headersList.get('x-locale')
  const locale = (cookieLocale || headerLocale || DEFAULT_LOCALE) as 'en' | 'ru'

  const messages = await loadMessages(locale, ['admin'])

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
