'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faDribbble,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row">
      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-rose-300 z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Левая часть */}
        <div
          className="
                  lg:bg-rose-300
                  w-full
                  lg:flex-[0_0_31%]
                  flex
                  items-center
                  justify-center
                  pt-[1.75rem]
                  px-[1.75rem]

                  lg:pt-[4.375rem]
                  lg:pb-[1.6625rem]

                  md:pt-[3.15rem]
                  md:pb-[0]
                  md:px-[3.5rem]
                "
        >
          <img
            src="/images/my_ava.jpg"
            alt="Avatar"
            className="rounded-full object-cover lg:mt-[-5.8rem] lg:max-w-[236px] lg:max-h-[236px] md:w-[13rem]"
          />
        </div>

        {/* Правая часть */}
        <div className="bg-gray-50 flex-1 flex flex-col lg:justify-between
        pt-[1.75rem]
                  px-[1.75rem]

                  lg:pt-[4.375rem]
                  lg:pb-[1.6625rem]

                  md:pt-[1.75rem]
                  md:pb-[1.4rem]
                  md:px-[3.5rem]"
        >
          {/* Центрированный контент */}
          <div className="flex flex-col lg:items-start lg:justify-center lg:flex-1 md:mb-[1.75rem]">

            <h1
              className="
            font-light
            text-gray-700
            lg:text-left
            leading-tight
            text-center
            ">
              <span className="text-[1.5rem]">Full-Stack Developer </span>
              <span
                className="
                font-bold text-yellow-500 uppercase block
                lg:text-[4.2rem] lg:leading-[1]
                text-[3rem] leading-[0.91]
                lg:text-left
                text-center
                ">
                Tanya Arbuz
              </span>
            </h1>

            <div
              className="
                flex items-center justify-between w-full mt-1 lg:flex-row flex-col
              ">
              <h2
                className="
                  text-[1.5rem]
                  text-gray-500
                  font-light pl-1
                  lg:text-left
                text-center
                md:mb-[1.75rem]
                ">
                Full-Stack Developer 2
              </h2>

              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#ededed] border border-[#ededed] rounded-[3px] text-gray-800 hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100">
                  <FontAwesomeIcon icon={faFacebookF} className="text-[1rem]"/>
                </a>
                <a
                  href="#"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#ededed] border border-[#ededed] rounded-[3px] text-gray-800 hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100"
                  style={{
                    transition:
                      'all 1.2s ease 0.7s, transform 1.2s ease 0.7s, opacity 1.2s ease 0.7s',
                  }}
                >
                  <FontAwesomeIcon icon={faDribbble} className="text-[1rem]"/>
                </a>
                <a
                  href="#"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#ededed] border border-[#ededed] rounded-[3px] text-gray-800 hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100"
                  style={{
                    transition:
                      'all 1.2s ease 0.7s, transform 1.2s ease 0.7s, opacity 1.2s ease 0.7s',
                  }}
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-[1rem]"/>
                </a>
              </div>
            </div>
          </div>

          {/* Контакты внизу */}
          <div className="w-full">
            <hr className="w-full border-t border-gray-200 mb-8"/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 leading-[1.75]">
              <div>
                <h4 className="font-semibold text-gray-400 font-semibold">Location</h4>
                <p className="text-gray-500 font-normal">Kishinev, OR</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 font-semibold">Phone</h4>
                <p className="text-gray-500 font-normal">+373 68 940 997</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 font-semibold">Telegram</h4>
                <p className="text-gray-500 font-normal">@tanya_arbuz</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 font-semibold">Email</h4>
                <p className="text-gray-500 font-normal">work.arbuz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}