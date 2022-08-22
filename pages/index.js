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
  about: {
    title: 'Game Mind Studios: Quem Somos',
    description:
      'A Game Mind é uma spin-off acadêmica constituída em 2020 a partir de projetos de pesquisa e mestrado desenvolvidos no Instituto Metrópole Digital (IMD) da UFRN. Fazendo parte do setor de EdTechs, nos consideramos um estúdio de games especialista em educação. Nosso principal produto (em desenvolvimento) é uma plataforma online de jogos digitais inovadores que visa criar uma nova cultura de inovação nas escolas.',
    cta: { title: 'Saiba mais', href: '' },
    imageURL: '/images/about.png'
  },
  avantasia: {
    title: 'Exploradores de Avantasia',
    description:
      'Esse é o jogo educacional digital da Game Mind! No mundo de fantasia e inovador de AVANTASIA, quatro pequenos exploradores vivem grandes aventuras, com o objetivo de desenvolverem habilidades e valores, tendo cada qual personalidades diferentes e que, ao longo das aventuras, vão se descobrindo como indivíduos partes de uma sociedade e do mundo.',
    imageURL: '/images/avantasia2.png',
    title2: 'Canva para Educadores: Produza recursos didáticos com o Canva',
    description2:
      'As possibilidades pedagógicas com o uso do CANVA são diversas, sendo essa uma ferramenta que auxilia o professor a se tornar um produtor ativo de conteúdo didático pedagógico, auxiliando na apresentação visual de conceitos para captar a atenção dos alunos',
    imageURL2: '/images/course.png'
  },
  blogSection: {
    title: 'Confira nosso blog',
    description:
      'Conteúdos para lhe manter atualizado sobre games, tecnologia e educação.'
  }
}

export const Home = () => {
  return (
    <div>
      <Header currentPage="home" />
      <Banner {...homeData.banner} />
      <About {...homeData.about} />
      <Avantasia {...homeData.avantasia} />
      <BlogSection {...homeData.blogSection} />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
