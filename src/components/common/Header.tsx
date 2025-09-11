'use client'

import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/features/LocaleSwitcher'

{/*todo:  {theme === 'light' ? '☀️' : '🌙'}*/}

export default function Header() {
  const t = useTranslations('Header')

  return (
    <header className="top-0 z-50 w-full bg-transparent h-[70px] relative flex flex-col lg:flex-row align-center h-[70px]">
      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#FBE1D0] md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF] z-0"/>
      {/*Content Block*/}
      <div className="w-full z-50 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left / Logo*/}
        <div
          className="
                  lg:bg-[#FBE1D0]
                  w-full lg:flex-[0_0_30%] flex items-start justify-end
                  pt-[1.75rem] px-[1.75rem]
                  md:px-[3.5rem]
                "
        >
          <div className="flex flex-col items-end justify-between text-right w-full">
            {/*Text Logo*/}
            <h2
              className="
                  w-full h-[38px]
                  text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
                  py-2
                  bg-[#F67769]
                  "
            >
              {t('title')}
            </h2>
          </div>
        </div>

        {/* Right /Text + Buttons */}
        <div
          className="
                  lg:bg-[#FFFFFF] bg-transparent
                  pt-[1.75rem] px-[1.75rem] md:px-[3.5rem]
                  flex-1 flex flex-col justify-between
                  sm:flex-row sm:items-center
                "
        >
          <h1 className="text-sm sm:text-base font-medium tracking-tight sm:mb-0 text-[#F67769]">
            {t('headerText')}
          </h1>

          <LocaleSwitcher/>

        </div>
      </div>
    </header>
  )
}
