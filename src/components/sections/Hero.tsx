'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import ContactInfo from '@/components/common/ContactInfo'
import myAva from '@/assets/images/my_ava.jpg'


export default function Hero() {
  const t = useTranslations('Hero')
  return (
    <section
      className="w-full lg:h-[calc(100vh-70px)] lg:h-[calc(100vh-70px)] min-h-full relative flex flex-col lg:flex-row">
      <div className="absolute top-0 left-0 w-1/2 min-h-full lg:bg-[#FBE1D0] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 min-h-full bg-[#FFFFFF] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row">
        {/* Left */}
        <div
          className="
             w-full
             flex items-center justify-center
             pt-[1.75rem] px-[1.75rem]
             lg:bg-[#FBE1D0] lg:flex-[0_0_30%] lg:pt-[4.375rem] lg:pb-[1.6625rem]
             md:pt-[3.15rem] md:pb-[0] md:px-[3.5rem]
         "
        >
          {/*/!*Avatar Image*!/*/}
          <Image
            src={myAva}
            alt="My photo"
            className="
                rounded-full
                object-cover
                w-40 sm:w-48 lg:w-56 mt-[2rem]
                lg:mt-[-5.8rem]
                sm:w-[14rem]
            "
          />
        </div>

        {/* Right */}
        <div
          className="
              bg-[#FFFFFF] pt-[1.75rem] px-[1.75rem]
              flex flex-col flex-1 lg:justify-between
              lg:pt-[4.375rem] lg:pb-[1.6625rem]
              md:pt-[1.75rem] md:pb-[1.4rem] md:px-[3.5rem]
             "
        >
          {/* Content */}
          <div className="flex flex-col lg:items-start lg:justify-center lg:flex-1 mb-[1rem] md:mb-[1.75rem]">

            {/* Titles */}
            <div
              className="
                font-light leading-tight text-center mb-4
                lg:text-left
                "
            >
              <span className="text-[1.1rem] sm:text-[1.2rem] text-gray-800 pb-3">[{t('smallTitle')}]</span>
              <span
                className="
                  font-bold uppercase block
                  text-[#F67769] text-center text-[2.5rem]
                  sm:text-[3rem] lg:text-[4rem] lg:text-left
                 "
              >
                {t('title')}
              </span>
            </div>

            {/* Description */}
            <div
              className="
                  flex lg:flex-row lg:items-left lg:justify-between w-full
                  justify-center flex-col items-center
                "
            >
              <h2
                className="
                    text-sm sm:text-base
                    text-[#455B84] font-normal
                    text-center lg:text-left
                    max-w-[600px]
                    mb-4 sm:mb-8 md:mb-7
                  "
              >
                <span className="hidden sm:inline">[ {t('description')} ]</span>
                <span className="sm:hidden">[ {t('descriptionMobile')} ]</span>
              </h2>

              {/*Social buttons + download*/}
              <div
                className="
              flex lg:flex-col items-end gap-2
              sm:flex-row">
                <a
                  href="../../../../CV_en.pdf"
                  download
                  className="
                      w-8 h-8 px-4 lg:w-[38px] lg:h-[38px]
                      flex items-center justify-center
                      text-sm font-medium text-white
                      bg-[#F67769] border border-[#F67769] rounded
                      hover:bg-transparent hover:text-[#F67769]
                      transition-colors duration-300 ease-in-out">
                  {/*Download CV */}
                  {/*<FontAwesomeIcon icon={faFileDownload} />*/}
                  CV
                </a>
                <a
                  href="https://github.com/devforthewin"
                  target="_blank" rel="noopener noreferrer"
                  className="
                      w-8 h-8 lg:w-[38px] lg:h-[38px]
                      flex items-center justify-center
                      bg-gray-200 border border-gray-200 rounded
                      text-gray-800 hover:bg-transparent
                      transition-all duration-300 ease-in-out
                    ">
                  <FontAwesomeIcon icon={faGithub} className="text-[1rem]"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/tanya-arbuz-187199221"
                  target="_blank" rel="noopener noreferrer"
                  className="
                      w-8 h-8 lg:w-[38px] lg:h-[38px]
                      flex items-center justify-center
                      bg-gray-200 border border-gray-200 rounded
                      text-gray-800 hover:bg-transparent
                      transition-all duration-300 ease-in-out
                    "
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-[1rem]"/>
                </a>
                <a
                  href="https://t.me/tanya_arbuz"
                  target="_blank" rel="noopener noreferrer"
                  className="
                      w-8 h-8 lg:w-[38px] lg:h-[38px]
                      flex items-center justify-center
                      bg-gray-200 border border-gray-200 rounded
                      text-gray-800 hover:bg-transparent
                      transition-all duration-300 ease-in-out
                    "
                >
                  <FontAwesomeIcon icon={faTelegramPlane} className="text-[1rem]"/>
                </a>
              </div>
            </div>
          </div>

          {/* Information Block */}
          <div className="w-full">
            <hr className="w-full border-t border-2 border-[#FF7814] mb-8"/>
            <ContactInfo/>
          </div>
        </div>
      </div>
    </section>
  )
}