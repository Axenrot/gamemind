import React from 'react'

import About from '../components/About'
import Avantasia from '../components/Avanstasia'
import Banner from '../components/Banner'
import BlogSection from '../components/BlogSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Partners from '../components/layout/Partners'

export const Home = () => {
  const DUMMY_DATA = [
    {
      id: 'p1',
      img: 'img-port.jpg',
      title: '5 Jogos comerciais para auxiliar nas aulas de Português',
      text: '“O importante não é ver o que ninguém nunca viu, mas...'
    },
    {
      id: 'p2',
      img: 'img-mate.jpg',
      title: '5 Jogos que favorecem a compreensão da Matemática',
      text: '“Desde os tempos remotos, o ser humano observa as leis...'
    },
    {
      id: 'p3',
      img: 'img-game.jpg',
      title: 'Game Design para Jogos Educacionais: o que você precisa saber',
      text: '“Os games fazem parte da rotina dos jovens em todo o mundo...'
    },
    {
      id: 'p4',
      img: 'img-tools.jpg',
      title: 'Ferramentas indispensáveis para o Ensino Presencial e Híbrido',
      text: '“Text prev iew hellow, alou teste, testando sexonaval aawe...'
    },
    {
      id: 'p5',
      img: 'img-learn.jpg',
      title:
        '5 Razões para você conhecer e experimentar a Aprendizagem Baseada em Jogos Digitais',
      text: '“Text prev iew hellow, alou teste, testando sexonaval aawe...'
    }
  ]

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
