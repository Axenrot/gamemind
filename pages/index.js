import React from 'react'

import About from '../components/About'
import Avantasia from '../components/Avanstasia'
import Banner from '../components/Banner'
import BlogSection from '../components/BlogSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Partners from '../components/layout/Partners'

const homeData = {
  banner: {
    title: 'Game Mind',
    description:
      'Plataforma Online de Jogos Digitais Inovadores para Aprendizagem de Matemática e Língua Portuguesa.',
    cta: { title: 'Nossa história', href: '' },
    imageURL: '/images/avantasia.png'
  },
  about: {}
}

export const Home = () => {
  return (
    <div>
      <Header currentPage="home" />
      <Banner {...homeData.banner} />
      <About />
      <Avantasia />
      <BlogSection />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
