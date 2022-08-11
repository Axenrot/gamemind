import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from '../../components/layout/Header'

const post = {
  id: 'como-gravar-e-disponibilizar-videoaulas-utilizando-o-canva',
  category: 'Tecnologia',
  title: 'Como gravar e disponibilizar videoaulas utilizando o Canva',
  image: '/images/blog-section.jpg',
  author: {
    name: 'Samanta Aires',
    image: '/images/author.png'
  },
  date: '5 de julho de 2022 - Leia em 5 minutos',
  content: [
    'No contexto remoto destes últimos anos, tornou-se quase obrigatório saber gravar aulas para disponibilizar aos alunos. Verificou-se que muitos educadores, mesmo vivendo na era digital, ainda têm dificuldade em realizar atividades remotas, principalmente quando envolve o compartilhamento de tela, áudio e vídeo. Isso também acontece com você?',
    'Essa atividade se torna muito mais prática com o uso do Canva. Sim, isso mesmo, do Canva! Esta ferramenta online de design gráfico permite criar vários materiais, como planners, posts para redes sociais, calendários, atividades didáticas e muito mais. O Canva auxilia na criação de apresentações com slides e oferece diversos recursos como as imagens, a conexão direta com o Youtube, o QR Code e os GIFs. Ah, e o melhor de tudo: permite fazer a gravação da sua apresentação!',
    'A gravação é um recurso da própria plataforma Canva. Nela, você pode gravar a tela da sua apresentação de slides tanto com áudio, como com vídeo (sua webcam). Ainda, na tela de gravação você também pode escrever notas que serão visíveis apenas para você, não aparecerão na gravação disponibilizada para os alunos.',
    'No tutorial a seguir ensinaremos o passo-a-passo de como realizar a gravação da sua apresentação utilizando o Canva versão Web. A plataforma também possui versões mobile para Android e iOS (iPhone) além de um aplicativo desktop para Windows (PC) e macOS.'
  ],
  tags1: 'canva',
  tags2: 'gravar aula',
  tags3: 'videoaula',
  authorDescription:
    'É sócia fundadora da Game Mind, graduada em Tecnologia da Informação e Mestre em Inovação em Tecnologias Educacionais pela UFRN. Foi professora de robótica educacional, desenvolvedora de software e gestora técnica no projeto de PD&I que desenvolveu o jogo Pharos no IMD/UFRN.'
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
                src={post.author.image}
                alt="author-img"
              />
              <div className="text-white text-sm">
                <div>{post.author.name}</div>
                <div className="text-white text-sm">{post.date}</div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 py-32">
            <img
              className="w-full rounded-md shadow-xl"
              alt="image-banner-canva"
              src={post.image}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto justify-center px-3 py-12">
        <h2>Como gravar e disponibilizar videoaulas utilizando o Canva</h2>
        <p>
          No contexto remoto destes últimos anos, tornou-se quase obrigatório
          saber gravar aulas para disponibilizar aos alunos. Verificou-se que
          muitos educadores, mesmo vivendo na era digital, ainda têm dificuldade
          em realizar atividades remotas, principalmente quando envolve o
          compartilhamento de tela, áudio e vídeo. Isso também acontece com
          você?
        </p>
        <p>
          Essa atividade se torna muito mais prática com o uso do Canva. Sim,
          isso mesmo, do Canva! Esta ferramenta online de design gráfico permite
          criar vários materiais, como planners, posts para redes sociais,
          calendários, atividades didáticas e muito mais. O Canva auxilia na
          criação de apresentações com slides e oferece diversos recursos como
          as imagens, a conexão direta com o Youtube, o QR Code e os GIFs. Ah, e
          o melhor de tudo: permite fazer a gravação da sua apresentação!
        </p>
        <p>
          A gravação é um recurso da própria plataforma Canva. Nela, você pode
          gravar a tela da sua apresentação de slides tanto com áudio, como com
          vídeo (sua webcam). Ainda, na tela de gravação você também pode
          escrever notas que serão visíveis apenas para você, não aparecerão na
          gravação disponibilizada para os alunos.
        </p>
        <p>
          No tutorial a seguir ensinaremos o passo-a-passo de como realizar a
          gravação da sua apresentação utilizando o Canva versão Web. A
          plataforma também possui versões mobile para Android e iOS (iPhone)
          além de um aplicativo desktop para Windows (PC) e macOS.
        </p>
      </div>
    </div>
  )
}

export default Post
