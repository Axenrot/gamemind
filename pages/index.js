import React from 'react'

import About from '../components/About'
import Avantasia from '../components/Avanstasia'
import Banner from '../components/Banner'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Partners from '../components/Partners'

export const Home = () => {
  return (
    <div>
      <Header currentPage="home" />
      <Banner />
      <About />
      <Avantasia />
      <BlogSection />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
