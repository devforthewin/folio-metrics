'use client'

export default function Experience() {
  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F6D8C2] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FCF8F6] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Left Part */}
        <div
          className="
                  lg:bg-[#F6D8C2]
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
              Work Experience
            </h2>
            {/*<h2 className="text-lg font-bold tracking-wider uppercase">Work Experience</h2>*/}
            <p className="text-sm mt-2">[Every line of code bears the mark of battle. Every project — a new victory.]</p>
          </div>
        </div>

        {/* Right Part */}
        <div
          className=" bg-[#FCF8F6] flex-1 flex flex-col
        pt-[1.75rem]
                  px-[1.75rem]

                  lg:pt-[4.375rem]
                  lg:pb-[1.6625rem]

                  md:pt-[1.75rem]
                  md:pb-[1.4rem]
                  md:px-[3.5rem]"
        >

          <div className="flex flex-col relative">
            {/* Линия таймлайна */}
            {/*<div className="absolute left-0 top-0 h-full w-px bg-gray-300 ml-2"></div>*/}


            {/* First Exp Block */}
            <div className="flex mb-12 relative">
              {/* Dot */}
              {/*<div className="absolute left-0 top-1 w-3 h-3 bg-[#F67769] rounded-full"></div>*/}

              <div className="flex w-full flex-col md:flex-row gap-6">
                <div className="w-full md:w-4/12 flex flex-col">
                  <h4 className="text-base text-[#F67769] font-bold uppercase mb-1">
                    CPABOX | 2022–2025
                  </h4>
                  <p className="text-xs font-medium mb-1">Full-Stack Developer</p>
                  <p className="text-xs text-gray-500 mb-1">(SaaS platform for media buying automation)</p>
                </div>

                <div className="w-full md:w-8/12 flex flex-col gap-4">
                  <div className="text-sm text-gray-500 space-y-2">
                    <p className="font-semibold">
                      <span>Stack: </span>
                      React, NestJS, TypeScript, Grammy, Zustand, MUI, Styled Components
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 space-y-2">
                    <p>
                      Built and maintained frontend architecture and backend logic. Integrated <span>Keitaro TDS</span>, developed
                      Telegram bots for domain checks, built Telegram Web Apps and webhook architecture. Contributed to
                      technical solutions and architecture. </p>
                    <p>
                      <span className="font-semibold text-[#F67769]">Result: </span>
                      Automated routine operations for traffic
                      arbitrage; strengthened architecture and product-thinking skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Block */}
            <div className="flex mb-12 relative">
              {/* Dot */}
              {/*<div className="absolute left-0 top-1 w-3 h-3 bg-[#F67769] rounded-full"></div>*/}

              <div className="flex w-full flex-col md:flex-row gap-6">
                <div className="w-full md:w-4/12 flex flex-col">
                  <h3 className="text-base font-bold uppercase mb-1 text-[#F67769]">
                    Remotza.tech | 2021–2022
                  </h3>
                  <p className="text-xs font-medium mb-1">Backend/Full-Stack Developer</p>
                  <p className="text-xs text-gray-500 mb-1">(SaaS platform for media buying automation)</p>
                </div>
                <div className="w-full md:w-8/12 flex flex-col gap-4">
                  <div className="text-sm text-gray-500 space-y-2">
                    <p className="font-semibold">
                      <span className="">Stack: </span>
                      Laravel, Vue.js, PostgreSQL, Redis
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 space-y-2">
                    <p>
                      Developed RESTful APIs, integrated external services, worked with PostgreSQL and
                      Redis caching, contributed to UI with Vue.js. </p>
                    <p>
                      <span className="font-semibold text-[#F67769]">Result: </span>
                      Delivered stable APIs meeting business
                      requirements; improved focus on stability and team communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Block */}
            <div className="flex mb-12 relative">
              {/* Dot */}
              {/*<div className="absolute left-0 top-1 w-3 h-3 bg-yellow-400 rounded-full"></div>*/}

              <div className="flex w-full flex-col md:flex-row gap-6">
                <div className="w-full md:w-4/12 flex flex-col">
                  <h3 className="text-base font-bold uppercase mb-1 text-[#F67769]">
                    AOPSRM | 2020–2021
                  </h3>
                  <p className="text-xs font-medium mb-1">Full-Stack Developer</p>
                  <p className="text-xs text-gray-500 mb-1">(SaaS platform for media buying automation)</p>
                </div>
                <div className="w-full md:w-8/12 flex flex-col gap-4">
                  <div className="text-sm text-gray-500 space-y-2">
                    <p className="font-semibold ">
                      <span className="">Stack: </span>
                      React, Laravel, Docker, GitLab CI/CD
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 space-y-2">
                    <p>
                      Designed and launched a full-featured CRM: React frontend with Redux and Formik, Laravel REST API
                      backend. Managed deployment with Docker and GitLab CI/CD; handled server admin and support. </p>
                    <p>
                      <span className="font-semibold text-[#F67769]">Result: </span>
                      Delivered end-to-end CRM solution; built strong
                      confidence in full-cycle delivery.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  )
}