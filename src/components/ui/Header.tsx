'use client'

import { useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState<'en' | 'ru'>('en')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    // здесь можешь добавить переключение Tailwind классов или контекста темы
  }

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ru' : 'en'))
    // здесь можешь поменять i18n контекст, если используешь его
  }

  return (
    <header className="top-0 z-50 w-full bg-transparent h-[70px] relative flex flex-col lg:flex-row">
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
            bg-[#F67769]">
              Tanya Arbuz
            </h2>
          </div>
        </div>

        {/* Right /Text + Buttons */}
        <div
          className="
          bg-[#FFFFFF]
          flex-1 flex items-center justify-between
          pt-[1.75rem] px-[1.75rem]
          md:px-[3.5rem]
      ">
          {/*Text Block*/}
          <h1 className="text-sm sm:text-base font-medium tracking-tight text-[#F67769]">
            Clean code. Sharp decisions. Steady hand.
          </h1>

          {/*Buttons Block*/}
          <div className="flex flex-row items-end gap-2">
            <button
              onClick={toggleLang}
              style={{
                transition:
                  'all 1.2s ease 0.7s, transform 1.2s ease 0.7s, opacity 1.2s ease 0.7s',
              }}
              className="
                  w-[38px] h-[38px]
                  flex gap-3
                  items-center justify-center
                  bg-transparent hover:bg-[#F67769] transition-all duration-[1200ms] ease-in-out hover:scale-100
                  text-[#F67769] text-md hover:text-white font-medium"
            >
              {lang.toUpperCase()}
            </button>

            {/*<button*/}
            {/*  onClick={toggleTheme}*/}
            {/*  style={{*/}
            {/*    transition:*/}
            {/*          'all 1.2s ease 0.7s, transform 1.2s ease 0.7s, opacity 1.2s ease 0.7s',*/}
            {/*  }}*/}
            {/*  className="*/}
            {/*  w-[38px] h-[38px]*/}
            {/*  flex items-center justify-center*/}
            {/*  bg-[#F23F4A]*/}
            {/*  border border-[#ededed] rounded-[3px]*/}
            {/*  text-gray-800*/}
            {/*  hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100"*/}
            {/*>*/}
            {/*  {theme === 'light' ? '☀️' : '🌙'}*/}
            {/*</button>*/}

          </div>
        </div>
      </div>
    </header>
  )
}
