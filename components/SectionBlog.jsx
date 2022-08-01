import React from 'react'

import Link from 'next/link'

export const SectionBlog = () => {
  return (
    <section>
      <div className="container flex flex-wrap mx-auto py-16">
        <div className="w-full mb-8 px-4 text-center sm:text-start sm:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-wide leading-relaxed text-slate-800">
            Confira nosso blog
          </h2>
          <p className="text-neutral-600 mt-4 tracking-wide leading-relaxed">
            Conteúdos para lhe manter atualizado sobre games, tecnologia e
            educação.
          </p>
        </div>

        <div className="w-full sm:w-1/2 px-4 sm:pl-8">
          <Link href="/blog">
            <>
              <img
                className="rounded-xl w-full"
                src="/images/blog-section.jpg"
                alt="blog-section"
              />
              <div className="rounded-xl bg-white p-6 mx-4 relative -top-8 shadow-lg">
                <h3 className="font-bold text-base tracking-wide mb-2 text-slate-800">
                  Como gravar e disponibilizar videoaulas utilizando o Canva
                </h3>
                <p className="text-blue-900 font-semibold">Leia Mais</p>
              </div>
            </>
          </Link>
        </div>

        <div className="w-full sm:w-1/2 flex flex-wrap px-4 sm:pr-8">
          <Link href=" ">
            <>
              <img
                className="object-cover sm:h-24 sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg mb-4"
                src="/images/img-port.png"
                alt="image-blog-link"
              />
              <div className="sm:w-1/2 lg:w-2/3 sm:pl-6 px-2">
                <h3 className="text-base font-bold text-slate-800 tracking-wide leading-relaxed mb-3">
                  5 Jogos comerciais para auxiliar nas aulas de Português
                </h3>
                <p>“O importante não é ver o que ninguém nunca viu, mas...</p>
              </div>
            </>
          </Link>
          <Link href=" ">
            <>
              <img
                className="object-cover sm:h-24 sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg mb-4 mt-4"
                src="/images/img-mate.png"
                alt="image-blog-link"
              />
              <div className="sm:w-1/2 lg:w-2/3 sm:pl-6 px-2">
                <h3 className="text-base font-bold text-slate-800 tracking-wide leading-relaxed mb-3">
                  5 Jogos que favorecem a compreensão da Matemática
                </h3>
                <p>“Desde os tempos remotos, o ser humano observa as leis...</p>
              </div>
            </>
          </Link>
          <Link href=" ">
            <>
              <img
                className="object-cover sm:h-24 sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg mb-4 mt-4"
                src="/images/img-game.png"
                alt="image-blog-link"
              />
              <div className="sm:w-1/2 lg:w-2/3 sm:pl-6 px-2">
                <h3 className="text-base font-bold text-slate-800 tracking-wide leading-relaxed mb-3">
                  Game Design para Jogos Educacionais: o que você precisa saber
                </h3>
                <p>
                  “Os games fazem parte da rotina dos jovens em todo o mundo...
                </p>
              </div>
            </>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionBlog
