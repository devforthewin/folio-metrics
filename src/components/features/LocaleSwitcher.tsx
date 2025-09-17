'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import clsx from 'clsx'

import { locales } from '@/i18n/config'

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleSwitch = (newLocale: string) => {
    if (newLocale === currentLocale) return

    // Clean currentLocale from pathname
    const segments = pathname.split('/')
    segments[1] = newLocale // заменяем локаль
    const newPath = segments.join('/')

    router.push(newPath)
  }

  return (
    <div className="flex flex-col md:flex-row items-end gap-2">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          <button
            onClick={() => handleSwitch(locale)}
            className={clsx(
              'transition-colors duration-200',
              currentLocale === locale
                ? 'text-[#F67769] bold'
                : 'hover:text-[#F67769]',
            )}
          >
            {locale.toLocaleUpperCase()}
          </button>
          {index < locales.length - 1 && <span className="text-gray-400 md:block hidden">|</span>}
        </span>
      ))}
    </div>
  )
}