import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { isValidLocale } from '@/i18n/config'

export default getRequestConfig(async ({ locale }) => {
  if (!isValidLocale(locale)) notFound()
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})