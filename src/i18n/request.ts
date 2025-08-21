import { getRequestConfig } from 'next-intl/server'

export const LOCALES = ['en', 'ru'] as const
export type AppLocale = typeof LOCALES[number]
export const DEFAULT_LOCALE: AppLocale = 'en'
export function isAppLocale(x: string | undefined): x is AppLocale {
  return !!x && (LOCALES as readonly string[]).includes(x)
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = isAppLocale(requested) ? requested : DEFAULT_LOCALE
  // if (!isAppLocale(requested)) notFound()

  return { locale }
})