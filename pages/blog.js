import React from 'react'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

export const Blog = () => {
  return (
    <div>
      <Header currentPage="home" />
      <div className="banner py-8 bg-banner-gradient w-full"></div>
      <Footer />
    </div>
  )
}

export default Blog
