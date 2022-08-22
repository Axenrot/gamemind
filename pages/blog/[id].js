import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import AuthorDescription from '../../components/AuthorDescription'
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
      <div className="blog-post py-8 bg-pinkbutton w-full">
        <div className="container flex sm:flex-row flex-col justify-between mx-auto px-3">
          <div className="flex flex-row flex-wrap w-full sm:w-7/12 md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center sm:text-left justify-center sm:justify-start">
            <Link href="/blog/tecnologia">
              <div>
                <button className="text-white border-2 cursor-pointer hover:text-pink hover:bg-white font-base rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2">
                  {post.category}
                </button>
              </div>
            </Link>
            <h1 className="text-white text-readTitle w-full font-bold pt-6 sm:pt-0">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 pt-4">
              <img
                className="w-10 h-10 rounded-full"
                src={post.author.avatar}
                alt="author-img"
              />
              <div className="text-white text-sm">
                <div>{post.author.name}</div>
                <div className="text-white text-sm">
                  {post.date} - {post.readingTime}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 py-32">
            <img
              className="w-full rounded-md shadow-xl"
              alt="image-banner-canva"
              src={post.thumbnail}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto justify-center px-3 py-12">
        <div className="mb-8">{post.content}</div>
        <hr className="text-slate-200"></hr>
        <div className="container flex flex-wrap pt-6">
          <Tags />
          <Share />
        </div>
        <div className="py-12">
          <AuthorDescription />
          <div className="mx-auto py-10">
            <Partners />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
