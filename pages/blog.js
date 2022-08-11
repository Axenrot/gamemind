import React from 'react'

import BlogNav from '../components/BlogNav'
import BlogSection from '../components/BlogSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

export const Home = () => {
  return (
    <div>
      <div className="pt-1 h-24 bg-banner-gradient w-full">
        <Header currentPage="blog" />
      </div>
      <BlogNav />
      <BlogSection expand={true} />
      <Footer />
    </div>
  )
}

export default Home
