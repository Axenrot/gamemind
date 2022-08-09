import React from 'react'

import About from '../components/About'
import Avantasia from '../components/Avanstasia'
import Banner from '../components/Banner'
import BlogSection from '../components/BlogSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Partners from '../components/layout/Partners'

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
