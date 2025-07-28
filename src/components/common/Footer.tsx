import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#FBE1D0] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left Part */}
        <div
          className="
                  lg:bg-[#FBE1D0]
                  w-full
                  lg:flex-[0_0_30%]
                  flex
                  items-start
                  justify-end
                  pt-[1.75rem]
                  px-[1.75rem]

                  lg:pt-[4.375rem]
                  lg:pb-[1.6625rem]

                  md:pt-[3.15rem]
                  md:px-[3.5rem]
                  md:pb-[0]
                "
        >
          <div className="flex flex-col items-end justify-end text-right">
            <h2
              className="
            w-full
            text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
            py-2
            bg-[#F67769]">
              I walk my own path. If it crosses yours — reach out.
            </h2>
          </div>
        </div>

        {/* Right Part */}
        <div
          className="
          bg-[#FFFFFF]
          flex-1 flex
          flex-col
          pt-[1.75rem]
          px-[1.75rem]
          lg:pt-[4.375rem]
          lg:pb-[1.6625rem]
          md:pt-[1.75rem]
          md:pb-[1.4rem]
          md:px-[3.5rem]"
        >
          <div className="w-full">

            {/*Info Block*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 leading-[1.75] mb-4">
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">Location</h4>
                <p className="text-gray-500 font-normal">Kishinev, OR</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">Phone</h4>
                <p className="text-gray-500 font-normal">+373 68 940 997</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">Telegram</h4>
                <p className="text-gray-500 font-normal">@tanya_arbuz</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#F67769] font-semibold">E-mail</h4>
                <p className="text-gray-500 font-normal">work.arbuz@gmail.com</p>
              </div>
            </div>
            <hr className="w-full border-t border-[#F67769] mb-8"/>

            <div className="flex flex-col lg:items-end lg:justify-center lg:flex-1 md:mb-[1.75rem]">

              <div
                className="
                flex items-end justify-between w-full mt-1 lg:flex-row flex-col
              ">
                <div
                  className="
            font-light
            text-gray-700
            lg:text-left
            leading-tight
            text-center
            mb-4
            ">
                  <span
                    className="
                font-bold text-[#F67769] uppercase block
                lg:text-[3.2rem] lg:leading-[1]
                text-[2rem] leading-[0.91]
                lg:text-left
                text-center
                mb-4
                ">
                    Tanya Arbuz
                  </span>
                  <span className="text-[1.3rem]">[Full-Stack Developer]</span>
                </div>

                <div className="flex space-x-3 mb-4">
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

          </div>
        </div>

      </div>
    </section>
  )
}