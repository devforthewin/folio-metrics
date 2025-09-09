export const LOCALES = ['en', 'ro', 'ru'] as const
export type AppLocale = typeof LOCALES[number]

export const DEFAULT_LOCALE: AppLocale = 'en'

export function isValidLocale(l: string | undefined): l is AppLocale {
  return typeof l === 'string' && (LOCALES as readonly string[]).includes(l as AppLocale)
}