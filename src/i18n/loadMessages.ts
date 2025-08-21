import { notFound } from 'next/navigation'

import { isAppLocale, type AppLocale } from './request' // или вынесите типы в отдельный файл

type Ns = 'common' | 'public' | 'admin'

export async function loadMessages(localeParam: string, namespaces: Ns[]) {
  if (!isAppLocale(localeParam)) notFound()
  const locale = localeParam as AppLocale

  const parts = await Promise.all(
    namespaces.map(ns =>
      import(`@/messages/${locale}/${ns}.json`).then(m => m.default),
    ),
  )
  return Object.assign({}, ...parts)
}
