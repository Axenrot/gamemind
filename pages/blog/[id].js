import React from 'react'

import { useRouter } from 'next/router'

import AuthorDescription from '../../components/AuthorDescription'
import PostTitle from '../../components/PostTitle'
import Share from '../../components/Share'
import { Tags } from '../../components/Tags'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Partners from '../../components/layout/Partners'

const post = {
  id: 'como-gravar-e-disponibilizar-videoaulas-utilizando-o-canva',
  category: 'Tecnologia',
  title: 'Como gravar e disponibilizar videoaulas utilizando o Canva',
  thumbnail: '/images/blog-section.jpg',
  author: {
    name: 'Samanta Aires',
    avatar: '/images/author.png',
    description:
      'É sócia fundadora da Game Mind, graduada em Tecnologia da Informação e Mestre em Inovação em Tecnologias Educacionais pela UFRN. Foi professora de robótica educacional, desenvolvedora de software e gestora técnica no projeto de PD&I que desenvolveu o jogo Pharos no IMD/UFRN.'
  },
  date: '5 de julho de 2022',
  readingTime: 'Leia em 5 minutos',
  content:
    'No contexto remoto destes últimos anos, tornou-se quase obrigatório saber gravar aulas para disponibilizar aos alunos. Verificou-se que muitos educadores, mesmo vivendo na era digital, ainda têm dificuldade em realizar atividades remotas, principalmente quando envolve o compartilhamento de tela, áudio e vídeo. Isso também acontece com você?',
  tags: ['canva', 'gravar aula', 'videoaula']
}

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Header />
      <PostTitle
        category={post.category}
        title={post.title}
        author={post.author}
        date={post.date}
        readingTime={post.readingTime}
        thumbnail={post.thumbnail}
      />
      <div className="container mx-auto px-3 py-12">
        <div className="flex">
          <Share vertical={true} />
          <div className="ml-3 sm:ml-16 mb-8 text-center sm:text-start">
            {post.content}
          </div>
        </div>

        <hr className="text-slate-200"></hr>
        <div className="flex flex-wrap justify-between pt-2">
          <Tags tags={post.tags} />
          <Share />
        </div>
        <AuthorDescription
          name={post.author.name}
          description={post.author.description}
        />
      </div>
      <Partners />
      <Footer />
    </div>
  )
}

export default Post
