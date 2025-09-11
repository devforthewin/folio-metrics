import { getRequestConfig } from 'next-intl/server'

import { AppLocale, defaultLocale, isValidLocale } from '@/i18n/config'

export default getRequestConfig(async ({ locale }) => {
  // const activeLocale = locale ?? 'ro'
  // return {
  //   locale: activeLocale,
  //   messages: (await import(`@/messages/${activeLocale}.json`)).default,
  // }
  const active = isValidLocale(locale) ? (locale as AppLocale) : defaultLocale
  const messages = (await import(`@/messages/${active}.json`)).default
  return { locale: active, messages }
})