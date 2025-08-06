import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Experience from '@/components/sections/Experience'
import TechnicalSkills from '@/components/sections/TechnicalSkills'
import Education from '@/components/sections/Education'
import Additional from '@/components/sections/Additional'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

export default function Home() {
  return (
    <div className="bg-white w-full relative text-gray-800">
      <Header/>
      <Hero/>
      <Intro/>
      <TechnicalSkills/>
      <Experience/>
      <Education/>
      <Additional/>
      <Footer/>
    </div>
  )
}

//todo: lint for Tailwindcss?