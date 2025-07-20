import Hero from '@/components/ui/Hero'
import Intro from '@/components/ui/Intro'
import Experience from '@/components/ui/Experience'
import TechnicalSkills from '@/components/ui/TechnicalSkills'
import Education from '@/components/ui/Education'
import Additional from '@/components/ui/Additional'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
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