import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import FeaturesSection from '../../components/FeaturesSection'
import IntroSection from '../../components/IntroSection'
import Extrafeature from '../../components/Extrafeature'
import TestimonialSection from '../../components/testimonials/TestimonialSection'

const Home = () => {
    return (
        < div className='home'>
          <Navigation/> 
          <IntroSection/>
          <FeaturesSection/>
          <Extrafeature/>
          <TestimonialSection/>
        </div>
    )
}

export default Home
