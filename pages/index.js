import React from 'react'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Home = () => {
  return (
    <div>
      <Header currentPage="home" />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
