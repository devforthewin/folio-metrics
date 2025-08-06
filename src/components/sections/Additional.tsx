'use client'

import { useTranslations } from 'next-intl'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SectionHeader from '@/components/common/SectionHeader'

export default function Additional() {
  const t = useTranslations('Additional')

  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F6D8C2] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FCF8F6] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Левая часть */}
        <SectionHeader
          title={t('leftTitle')} subtitle={t('leftSubtitle')}
          theme="peach"/>

        {/* Right Part */}
        <div
          className="bg-[#FCF8F6] flex-1 flex flex-col
        pt-[1.75rem]
                  px-[1.75rem]

                  lg:pt-[4.375rem]
                  lg:pb-[1.6625rem]

                  md:pt-[1.75rem]
                  md:pb-[1.4rem]
                  md:px-[3.5rem]"
        >
          <div className="">
            <p className="mb-4">
              <a
                href="https://github.com/devforthewin/folio-metrics"
                target="_blank"
                className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg transition">
                <FontAwesomeIcon icon={faGithub} className="text-[1rem]"/> Исследовать код
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}