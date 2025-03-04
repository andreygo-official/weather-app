
import './home.style.css'
import React from 'react'
import Weather from './Weather Forecst/Weather'
import FutureLocations from './Future Locations/FutureLocations'
import AppFeaturesContainer from './App Features Container/AppFeaturesContainer'

const Home = () => {
  return (
    <div>
      <Weather/>
      <FutureLocations />
      <AppFeaturesContainer />
    </div>
  )
}

export default Home
