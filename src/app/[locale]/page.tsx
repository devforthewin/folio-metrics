import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Experience from '@/components/sections/Experience'
import TechnicalSkills from '@/components/sections/TechnicalSkills'
import Education from '@/components/sections/Education'
import Additional from '@/components/sections/Additional'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { useSectionObserver } from '@/lib/analytics/useSectionObserver'

export default function Home() {
  useSectionObserver()

  return (
    <div className="bg-white w-full relative text-gray-800">
      <Header/>
      <section id="hero"><Hero/></section>
      <section id="intro"><Intro/></section>
      <section id="skills"><TechnicalSkills/></section>
      <section id="experience"><Experience/></section>
      <section id="education"><Education/></section>
      <section id="adds"><Additional/></section>
      <Footer/>
    </div>
  )
}

//todo: lint for Tailwindcss?