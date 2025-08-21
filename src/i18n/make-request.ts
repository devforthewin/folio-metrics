import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { AppLocale, isAppLocale } from '@/i18n/request'

export function makeRequestConfig(namespaces: Array<'common'|'public'|'admin'>) {
  return getRequestConfig(async ({ locale }) => {
    if (!isAppLocale(locale ?? '')) notFound()
    const active = locale as AppLocale

    const parts = await Promise.all(
      namespaces.map(ns =>
        import(`@/messages/${active}/${ns}.json`).then(m => m.default),
      ),
    )

    return {
      locale: active,
      messages: Object.assign({}, ...parts),
    }
  })
}