import React from 'react'

import About from '../components/About'
import Avantasia from '../components/Avanstasia'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Home = () => {
  return (
    <div>
      <Header currentPage="home" />
      <Banner />
      <About />
      <Avantasia />
      <Footer />
    </div>
  )
}

export default Home
