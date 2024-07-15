import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import Services from '../components/LandingPage/Services'
import About from '../components/LandingPage/About'
import UpcomingEvents from '../components/LandingPage/UpcomingEvents'
const LandingPage :React.FC=()=> {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Services/>
        <UpcomingEvents/>
        
        
    </div>
  )
}

export default LandingPage