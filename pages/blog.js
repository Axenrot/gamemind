import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

export const Home = () => {
  return (
    <div>
      <Header currentPage="home" />
      <div className="banner py-8 bg-banner-gradient w-full"></div>
      <Footer />
    </div>
  )
}

export default Home
