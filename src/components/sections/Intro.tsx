'use client'

export default function Intro() {
  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F6D8C2] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FCF8F6] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left About me */}
        <div
          className="
                  lg:bg-[#F6D8C2]
                  w-full lg:flex-[0_0_30%]
                  flex items-start justify-end
                  pt-[1.75rem] px-[1.75rem] lg:pt-[4.375rem] lg:pb-[1.6625rem]
                  md:pt-[3.15rem] md:px-[3.5rem] md:pb-[0]
                "
        >
          <div className="flex flex-col items-end justify-end text-right">
            <h2
              className="
            w-full h-[38px]
            text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
            py-2
            bg-[#F67769]">
              About Me
            </h2>
            <p className="text-sm mt-2">
              [A warrior doesn't boast — he simply knows what he's capable of.]
            </p>
          </div>
        </div>

        {/* Right Part */}
        <div
          className="
          bg-[#FCF8F6]
          flex-1 flex flex-col
          pt-[1.75rem] px-[1.75rem]
          lg:pt-[4.375rem] lg:pb-[1.6625rem]
          md:pt-[1.75rem] md:pb-[1.4rem] md:px-[3.5rem]"
        >
          <div className="mb-4">
            <p className="mb-2">
              Full-stack developer with 4+ years of experience, specializing in building web applications and Telegram
              bots. I’m equally confident in both frontend and backend development, focused on creating flexible and
              scalable solutions.
            </p>
            <p>
              I care deeply about architectural reliability, user convenience, and automation of routine tasks.
              Continuously learning, I listen to my teammates and strive to propose solutions that benefit both the
              business and the team.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}