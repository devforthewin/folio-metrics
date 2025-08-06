'use client'

import { useTranslations } from 'next-intl'

import SectionHeader from '@/components/common/SectionHeader'

export default function Education() {
  const t = useTranslations('Education')

  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#FBE1D0] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left Part */}
        <SectionHeader
          title={t('leftTitle')} subtitle={t('leftSubtitle')}
          theme="cream"/>

        {/* Right Part */}
        <div
          className="
          bg-[#FFFFFF]
          flex-1 flex flex-col
          pt-[1.75rem] px-[1.75rem]
          lg:pt-[4.375rem] lg:pb-[1.6625rem]
          md:pt-[1.75rem] md:pb-[1.4rem] md:px-[3.5rem]"
        >
          <div className="flex mb-12 relative pl-8">
            <div className="flex w-full gap-4 items-start">
              <div className="flex flex-col">
                <h3 className="text-base font-bold uppercase text-[#F67769] mb-2">
                  {t('educ')}
                </h3>
                <h2
                  className="
                    w-full h-[5px]
                    font-bold tracking-wider text-sm text-[#FFFFFF] text-center
                    mb-2
                    bg-[#F67769]">
                </h2>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {t('addiTitle')}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                  <li>{t('additionallyBlock.first')}</li>
                  <li>{t('additionallyBlock.second')}</li>
                  <li>{t('additionallyBlock.third')}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}