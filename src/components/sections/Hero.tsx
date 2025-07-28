'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <section className="w-full screen-minus-header relative flex flex-col lg:flex-row">
      <div className="absolute top-0 left-0 w-1/2 screen-minus-header lg:bg-[#FBE1D0] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 screen-minus-header bg-[#FFFFFF] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left */}
        <div
          className="
                  lg:bg-[#FBE1D0]
                  w-full
                  lg:flex-[0_0_30%]
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
            className="rounded-full object-cover lg:mt-[-5.8rem]"
          />
        </div>

        {/* Right */}
        <div
          className="bg-[#FFFFFF] flex-1 flex flex-col lg:justify-between
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

            <div
              className="
            font-light
            text-gray-700
            lg:text-left
            leading-tight
            text-center
            mb-4
            ">
              <span className="text-[1.3rem] text-[#455B84] pb-3">[Full-Stack Developer]</span>
              <span
                className="
                font-bold text-[#F67769] uppercase block
                lg:text-[4rem] lg:leading-[1]
                text-[2rem] leading-[0.91]
                lg:text-left
                text-center
                ">
                Tanya Arbuz
              </span>
            </div>

            <div
              className="
                flex items-left justify-between w-full mt-1 flex-row
              ">
              <h2
                className="
                  text-[1rem]
                  text-gray-500
                  font-light pl-1
                  lg:text-left
                text-center
                text-[#455B84]
                md:mb-[1.75rem]
                font-normal
                max-w-[600px]
                ">
                [ Building scalable, modular systems with a strong focus on architecture, clean code, and iterative delivery.
                Solving product and engineering challenges with a long-term mindset. ]
              </h2>

              {/*Social buttons + download*/}
              <div className="flex flex-col items-end gap-2">
                <a
                  href="https://github.com/devforthewin"
                  className="
                  w-[38px] h-[38px]
                  flex gap-3 items-center justify-center
                  bg-[#F67769] hover:bg-transparent hover:scale-100 hover:text-[#F67769]
                  border border-[#F67769] hover:border-[#F67769] rounded-[3px]
                  transition-all duration-[1200ms] ease-in-out
                  text-white font-medium">
                  {/*Download CV */}
                  {/*<FontAwesomeIcon icon={faFileDownload} />*/}
                  CV
                </a>
                <a
                  href="https://github.com/devforthewin"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#ededed] border border-[#ededed] rounded-[3px] text-gray-800 hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100">
                  <FontAwesomeIcon icon={faGithub} className="text-[1rem]"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/tanya-arbuz-187199221"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#ededed] border border-[#ededed] rounded-[3px] text-gray-800 hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100"
                  style={{
                    transition:
                      'all 1.2s ease 0.7s, transform 1.2s ease 0.7s, opacity 1.2s ease 0.7s',
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-[1rem]"/>
                </a>
                <a
                  href="https://t.me/tanya_arbuz"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#ededed] border border-[#ededed] rounded-[3px] text-gray-800 hover:bg-transparent transition-all duration-[1200ms] ease-in-out hover:scale-100"
                  style={{
                    transition:
                      'all 1.2s ease 0.7s, transform 1.2s ease 0.7s, opacity 1.2s ease 0.7s',
                  }}
                >
                  <FontAwesomeIcon icon={faTelegramPlane} className="text-[1rem]"/>
                </a>
              </div>
            </div>
          </div>

          {/* Information Block */}
          <div className="w-full">
            <hr className="w-full border-t border-2 border-[#FF7814] mb-8"/>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 leading-[1.75]">
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">Location</h4>
                <p className="text-[#455B84] font-normal">Kishinev, OR</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">Phone</h4>
                <p className="text-[#455B84] font-normal">+373 68 940 997</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">Telegram</h4>
                <p className="text-[#455B84] font-normal">@tanya_arbuz</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">E-mail</h4>
                <p className="text-[#455B84] font-normal">work.arbuz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}