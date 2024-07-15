import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import Services from '../components/LandingPage/Services'
import About from '../components/LandingPage/About'
import UpcomingEvents from '../components/LandingPage/UpcomingEvents'
import ContactUs from '../components/LandingPage/ContactUs'
const LandingPage :React.FC=()=> {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Services/>
        <UpcomingEvents/>
        <ContactUs/>
        
        
    </div>
  )
}

export default LandingPage