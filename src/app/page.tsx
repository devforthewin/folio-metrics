'use client'

import Header from '@/components/common/Header'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import TechnicalSkills from '@/components/sections/TechnicalSkills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Additional from '@/components/sections/Additional'
import Footer from '@/components/common/Footer'
import { useSectionObserver } from '@/lib/hooks/useSectionObserver'

export default function LandingPage() {
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