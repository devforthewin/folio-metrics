import Hero from '@/components/ui/Hero'
import Intro from '@/components/ui/Intro'
import Experience from '@/components/ui/Experience'
import TechnicalSkills from '@/components/ui/TechnicalSkills'
import Education from '@/components/ui/Education'
import Additional from '@/components/ui/Additional'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'

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