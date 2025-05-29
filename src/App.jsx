import { Features } from 'tailwindcss'
import './App.css'
import { HeroSection } from './componnents/HeroSection'
import Navbar from './componnents/Navbar'
import { FeaturesSec } from './componnents/FeaturesSec'
import { Services } from './componnents/Services'
import { Testimonials } from './componnents/Testimonials'
import { Footer } from './componnents/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection />
      <FeaturesSec />
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
