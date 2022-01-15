import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import FeaturesSection from '../../components/FeaturesSection'
import IntroSection from '../../components/IntroSection'
import Extrafeature from '../../components/Extrafeature'

const Home = () => {
    return (
        < div className='home'>
          <Navigation/> 
          <IntroSection/>
          <FeaturesSection/>
          <Extrafeature/>
        </div>
    )
}

export default Home
