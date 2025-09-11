'use client'

import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/common/LocaleSwitcher'

export default function LandingPage() {
  const t = useTranslations('Header')
  return (
    <div>
      {t('headerText')}
      <LocaleSwitcher/>
    </div>
  )
}