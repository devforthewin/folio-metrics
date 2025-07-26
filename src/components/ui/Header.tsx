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
    <header className="sticky top-0 z-50 w-full bg-transparent h-[70px] relative flex flex-col lg:flex-row">
      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F4E6DD] md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF] z-0"/>

      <div className="w-full z-50 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Левая часть */}
        <div
          className="
                  lg:bg-[#F4E6DD]
                  w-full
                  lg:flex-[0_0_30%]
                  flex
                  items-start
                  justify-end
                  pt-[1.75rem]
                  px-[1.75rem]
                "
        >
          <div className="flex flex-col items-end justify-between text-right">
            <h2 className="text-lg font-bold tracking-wider uppercase text-[#F95427] px-4 py-2 border border-[#F95427]">Tanya Arbuz</h2>
          </div>
        </div>

        {/* Правая часть */}
        <div
          className="
          bg-[#FFFFFF]
          flex-1 flex items-center justify-between
          pt-[1.75rem] px-[1.75rem]
      ">
          <h1 className="text-sm sm:text-base md:text-lg font-medium tracking-tight text-[#6EA5AA]">
            Clean code. Sharp decisions. Steady hand.
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-xs px-3 py-1 px-4 py-2 border border-[#F95427]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="text-xs px-3 py-1 px-4 py-2 border border-[#F95427]"
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>

      {/*<div className="w-full z-10 max-w-[1276px] mx-auto px-4 py-3 flex items-center justify-between">*/}
      {/*  <h1 className="text-sm sm:text-base md:text-lg font-medium tracking-tight text-gray-800 dark:text-gray-100">*/}
      {/*    Clean code. Sharp decisions. Steady hand.*/}
      {/*  </h1>*/}
      {/*  <div className="flex items-center gap-3">*/}
      {/*    <button*/}
      {/*      onClick={toggleLang}*/}
      {/*      className="text-xs px-3 py-1"*/}
      {/*    >*/}
      {/*      {lang.toUpperCase()}*/}
      {/*    </button>*/}
      {/*    <button*/}
      {/*      onClick={toggleTheme}*/}
      {/*      className="text-xs px-3 py-1"*/}
      {/*    >*/}
      {/*      {theme === 'light' ? '☀️' : '🌙'}*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  )
}
