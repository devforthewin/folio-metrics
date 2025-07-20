export default function Additional() {
  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F1DBD3] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FCF8F6] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Левая часть */}
        <div
          className="
                  lg:bg-[#F1DBD3]
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
            <h2 className="text-lg font-bold tracking-wider uppercase">Additional</h2>
            {/*<p className="text-sm mt-2">What I am all about.</p>*/}
          </div>
        </div>

        {/* Правая часть — текст */}
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
              GitHub: https://github.com/devforthewin
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}