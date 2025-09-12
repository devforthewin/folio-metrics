'use client'

import { useTranslations } from 'next-intl'

import SectionHeader from '@/components/common/SectionHeader'
import SkillBar from '@/components/ui/SkillBar'

export default function TechnicalSkills() {
  const t = useTranslations('TechnicalSkills')

  const additionalSkills = [
    'Zustand', 'Webpack/Vite', 'MUI', 'Styled Components',
    'Telegram API', 'Grammy', 'Webhook Architecture', 'Postman', 'ORM',
  ]

  return (
    <section className="flex w-full text-gray-700 relative">

      <div className="absolute top-0 left-0 w-1/2 h-full lg:bg-[#FBE1D0] z-0 md:bg-gray-50"/>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF] z-0"/>

      <div className="w-full z-10 max-w-[1276px] mx-auto flex flex-col lg:flex-row h-full">

        {/* Left Part */}
        <SectionHeader
          title={t('leftTitle')} subtitle={t('leftSubtitle')}
          theme="cream"/>

        {/* Right */}
        <div
          className="bg-[#FFFFFF] flex-1 flex flex-col pt-[1.75rem] px-[1.75rem] lg:pt-[4.375rem] lg:pb-[1.6625rem] md:pt-[1.75rem] md:pb-[1.4rem] md:px-[3.5rem]">

          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8">

            {/* Left Column */}
            <div>
              <h3 className="text-md font-bold mb-4 uppercase text-[#F67769]">{t('frontTitle')}</h3>
              <SkillBar name="React" level={5}/>
              <SkillBar name="TypeScript" level={5}/>
              <SkillBar name="Next.js" level={5}/>
              <SkillBar name="Vue" level={3}/>

              <h3 className="text-md font-bold mt-6 mb-4 uppercase text-[#F67769]">{t('backTitle')}</h3>
              <SkillBar name="NestJS" level={5}/>
              <SkillBar name="Laravel" level={3}/>
              <SkillBar name="REST API" level={5}/>
              <SkillBar name="PostgreSQL" level={3}/>
              <SkillBar name="MariaDB" level={5}/>
              <SkillBar name="Redis" level={4}/>
            </div>

            {/* Right Col */}
            <div>
              <h3 className="text-md font-bold mb-4 uppercase text-[#F67769]">{t('infraTitle')}</h3>
              <SkillBar name="Docker" level={3}/>
              <SkillBar name="GitLab CI/CD" level={3}/>
              <SkillBar name="Cloudflare" level={3}/>

              <h3 className="text-md font-bold mt-6 mb-4 uppercase text-[#F67769]">{t('otherTitle')}</h3>
              <SkillBar name="Telegram Bots" level={4}/>
              <SkillBar name="Telegram Web Apps" level={5}/>
              <SkillBar name="Integrations" level={4}/>
            </div>
          </div>

          {/*Block Additinal Skills*/}
          <div className="mt-8">
            <h3 className="w-full text-center text-md font-bold">
              {t('addTitle')}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {additionalSkills.map((skill) => (
                <span key={skill} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}