'use client'

import Header from '@/components/common/Header'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import TechnicalSkills from '@/components/sections/TechnicalSkills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'

export default function LandingPage() {
  return (
    <div>
      <Header/>
      <section id="hero"><Hero/></section>
      <section id="intro"><Intro/></section>
      <section id="skills"><TechnicalSkills/></section>
      <section id="experience"><Experience/></section>
      <section id="education"><Education/></section>
      <section id="adds"></section>
    </div>
  )
}