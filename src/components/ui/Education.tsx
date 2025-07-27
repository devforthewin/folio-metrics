'use client'

export default function Education() {
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
            w-full h-[38px]
            text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
            py-2
            bg-[#F67769]">
              Education
            </h2>
            <p className="text-sm mt-2">[Learning never ends. A samurai always remains a student.]</p>
          </div>
        </div>

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
                  Russian University of Cooperation | Accounting and Finance | 2003–2007
                </h3>
                <h2
                  className="
                    w-full h-[5px]
                    font-bold tracking-wider text-sm text-[#FFFFFF] text-center
                    mb-2
                    bg-[#F67769]">
                </h2>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Additionally:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                  <li>Completed a webmaster course in 2011.</li>
                  <li>Gained hands-on experience through practical development.</li>
                  <li>Continuous self-education via professional resources.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}