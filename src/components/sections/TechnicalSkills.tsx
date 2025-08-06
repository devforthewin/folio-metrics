'use client'

import { useTranslations } from 'next-intl'

import SkillBarText from '@/components/ui/SkillBarText'

export default function TechnicalSkills() {
  const t = useTranslations('TechnicalSkills')

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
          {/*Titles Block*/}
          <div
            className="
          flex flex-col
          lg:items-end lg:justify-end lg:text-right
          sm:w-full text-center">
            <h2
              className="
            w-full h-[38px]
            text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
            py-2
            bg-[#F67769]">
              {t('leftTitle')}
            </h2>
            <p className="text-sm mt-2 sm:mt-4">
              [{t('leftSubtitle')}]
            </p>
          </div>
        </div>

        {/* Right */}
        <div
          className="bg-[#FFFFFF] flex-1 flex flex-col pt-[1.75rem] px-[1.75rem] lg:pt-[4.375rem] lg:pb-[1.6625rem] md:pt-[1.75rem] md:pb-[1.4rem] md:px-[3.5rem]">

          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8">

            {/* Left Column */}
            <div>
              <h3 className="text-md font-bold mb-4 uppercase text-[#F67769]">{t('frontTitle')}</h3>
              <SkillBarText name="React" percent={95}/>
              <SkillBarText name="TypeScript" percent={90}/>
              <SkillBarText name="Next.js" percent={85}/>
              <SkillBarText name="Vue" percent={75}/>

              <h3 className="text-md font-bold mt-6 mb-4 uppercase text-[#F67769]">{t('backTitle')}</h3>
              <SkillBarText name="NestJS" percent={85}/>
              <SkillBarText name="Laravel" percent={80}/>
              <SkillBarText name="REST API" percent={90}/>
              <SkillBarText name="PostgreSQL" percent={85}/>
              <SkillBarText name="MariaDB" percent={70}/>
              <SkillBarText name="Redis" percent={70}/>
            </div>

            {/* Right Col */}
            <div>
              <h3 className="text-md font-bold mb-4 uppercase text-[#F67769]">{t('infraTitle')}</h3>
              <SkillBarText name="Docker" percent={85}/>
              <SkillBarText name="GitLab CI/CD" percent={85}/>
              <SkillBarText name="Cloudflare" percent={70}/>

              <h3 className="text-md font-bold mt-6 mb-4 uppercase text-[#F67769]">{t('otherTitle')}</h3>
              <SkillBarText name="Telegram Bots" percent={90}/>
              <SkillBarText name="Telegram Web Apps" percent={85}/>
              <SkillBarText name="Integrations" percent={85}/>
            </div>
          </div>

          {/*Block Additinal Skills*/}
          <div className="mt-8">
            <h2
              className="
            w-full h-[38px]
            text-md font-bold tracking-wider text-[#FFFFFF] text-center
            py-2 mb-[1.3rem]
            bg-[#F67769]">
              {t('addTitle')}
            </h2>
            <h1 className="text-sm sm:text-base tracking-tight text-[#F67769] w-full">
            </h1>
            <p className="text-sm text-gray-700">
              Zustand, Webpack/Vite, MUI, Styled Components, Telegram API, Grammy, Webhook Architecture, Postman,
              ORM.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}