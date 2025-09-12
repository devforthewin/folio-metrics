'use client'

import Header from '@/components/common/Header'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'

export default function LandingPage() {
  return (
    <div>
      <Header/>
      <section id="hero"><Hero/></section>
      <section id="intro"><Intro/></section>
      <section id="skills"></section>
      <section id="experience"></section>
      <section id="education"></section>
      <section id="adds"></section>
    </div>
  )
}