import React from 'react'

import FeaturedPostCard from './items/FeaturedPostCard'
import PostCard from './items/PostCard'

export const BlogSection = () => {
  const posts = [
    {
      id: 'p1',
      img: '/images/img-port.png',
      title: '5 Jogos comerciais para auxiliar nas aulas de Português',
      text: '“O importante não é ver o que ninguém nunca viu, mas...'
    },
    {
      id: 'p2',
      img: '/images/img-mate.png',
      title: '5 Jogos que favorecem a compreensão da Matemática',
      text: '“Desde os tempos remotos, o ser humano observa as leis...'
    },
    {
      id: 'p3',
      img: '/images/img-game.png',
      title: 'Game Design para Jogos Educacionais: o que você precisa saber',
      text: '“Os games fazem parte da rotina dos jovens em todo o mundo...'
    },
    {
      id: 'p4',
      img: '/images/img-tools.png',
      title: 'Ferramentas indispensáveis para o Ensino Presencial e Híbrido',
      text: '“Text prev iew hellow, alou teste, testando sexonaval aawe...'
    },
    {
      id: 'p5',
      img: '/images/img-learn.png',
      title:
        '5 Razões para você conhecer e experimentar a Aprendizagem Baseada em Jogos Digitais',
      text: '“Text prev iew hellow, alou teste, testando sexonaval aawe...'
    }
  ]
  const posts3 = posts.slice(0, 3)
  console.log(posts3)
  return (
    <div className="container px-3 mx-auto">
      <div className="w-full px-4 text-center sm:text-start sm:px-0 py-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-wide leading-relaxed text-slate-800">
          Confira nosso blog
        </h2>
        <p className="text-neutral-600 mt-4 tracking-wide leading-relaxed">
          Conteúdos para lhe manter atualizado sobre games, tecnologia e
          educação.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-2">
          <FeaturedPostCard />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 sm:pl-2">
          {posts3.map(post => (
            <div key={post.id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
