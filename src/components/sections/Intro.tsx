'use client'

import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Intro() {
  const t = useTranslations('AboutMe')

  return (
    <section className="flex w-full text-gray-700 relative">
      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F6D8C2] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FCF8F6] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left About me */}
        <div
          className="
                  w-full
                  flex items-start justify-end
                  pt-[1.75rem] px-[1.75rem]

                  lg:bg-[#F6D8C2] lg:flex-[0_0_30%] lg:pt-[4.375rem] lg:pb-[1.6625rem]
                  md:pt-[3.15rem] md:px-[3.5rem] md:pb-[0]
                ">

          {/*Titles Block*/}
          <div
            className="
          flex flex-col
          lg:items-end lg:justify-end lg:text-right
          sm:w-full sm:text-center">
            <h2
              className="
                  w-full h-[38px]
                  py-2 text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
                  bg-[#F67769] rounded-sm
                  ">
              {t('leftTitle')}
            </h2>
            <p className="text-sm text-gray-800 mt-2 sm:mt-4 font-normal">
              <blockquote className="text-sm text-gray-600 mt-3 sm:mt-4 font-normal italic">
                [ {t('leftSubtitle')} ]
              </blockquote>
            </p>
          </div>
        </div>

        {/* Right Part */}
        <div
          className="
            bg-[#FCF8F6] flex-1 flex flex-col pt-7 px-7 lg:pt-16 lg:pb-6
            md:pt-7 md:pb-5 md:px-14
          "
        >
          {/* Описание с выделенными навыками */}
          <p className="mb-6 leading-relaxed">
            {t.rich('description1', {
              highlight: (chunks) => (
                <span className="font-semibold text-[#F67769]">{chunks}</span>
              ),
              secondary: (chunks) => (
                <span className="font-semibold text-gray-800">{chunks}</span>
              ),
            })}
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">{t('description2_title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#F67769] mr-2 h-3.5 w-3.5"/>
                {t('description2_item1')}
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#F67769] mr-2 h-3.5 w-3.5"/>
                {t('description2_item2')}
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-[#F67769] mr-2 h-3.5 w-3.5"/>
                {t('description2_item3')}
              </li>
            </ul>
          </div>

          <p className="leading-relaxed">
            {t.rich('description2', {
              highlight: (chunks) => (
                <span className="font-semibold text-[#F67769]">{chunks}</span>
              ),
              secondary: (chunks) => (
                <span className="font-semibold text-gray-800">{chunks}</span>
              ),
            })}
          </p>

        </div>
      </div>
    </section>
  )
}