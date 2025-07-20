export default function Footer() {
  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#F4E6DD] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">
        {/* Левая часть — INTRO */}
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

                  lg:pt-[4.375rem]
                  lg:pb-[1.6625rem]

                  md:pt-[3.15rem]
                  md:px-[3.5rem]
                  md:pb-[0]
                "
        >
          <div className="flex flex-col items-end justify-end text-right">
            <h2 className="text-lg font-bold tracking-wider uppercase">Footer</h2>
            {/*<p className="text-sm mt-2">What I am all about.</p>*/}
          </div>
        </div>

        {/* Правая часть — текст */}
        <div
          className=" bg-[#FFFFFF] flex-1 flex flex-col
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh
              nec
              urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed{' '}
              <span className="text-yellow-600 font-medium">pretium</span>, ligula sollicitudin laoreet viverra, tortor
              libero
              sodales leo, eget blandit nunc tortor ut nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae
              mauris
              non felis mollis faucibus.
            </p>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
              purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
              tortor.
              Sed
              semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
              nunc
              sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu
              et
              nulla.
              Nulla vitae mauris non felis mollis.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}