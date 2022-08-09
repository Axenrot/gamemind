import React from 'react'

import FeaturedPostCard from './items/FeaturedPostCard'
import PostCard from './items/PostCard'

export const BlogSection = () => {
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
          <PostCard
            image="/images/img-port.png"
            title="5 Jogos comerciais para auxiliar nas aulas de Português"
            text="“O importante não é ver o que ninguém nunca viu, mas..."
          />
          <PostCard
            image="/images/img-mate.png"
            title="5 Jogos que favorecem a compreensão da Matemática"
            text="Desde os tempos remotos, o ser humano observa as leis..."
          />
          <PostCard
            image="/images/img-game.png"
            title="Game Design para Jogos Educacionais: o que você precisa saber"
            text="Os games fazem parte da rotina dos jovens em todo o mundo..."
          />
        </div>
      </div>
    </div>
  )
}

export default BlogSection
