import React from 'react'
import gsap from 'gsap'

export const About = () => {
  function onEnter({ currentTarget }) {
    gsap.to(currentTarget, { color: '#b74284', backgroundColor: '#fff' })
  }
  function onLeave({ currentTarget }) {
    gsap.to(currentTarget, {
      color: '#fff',
      borderColor: '#b74284',
      background: '#b74284'
    })
  }

  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row">
      <div className="py-8 w-full md:w-5/12 px-3 text-center sm:text-start">
        <h1 className="text-slate-800 text-4xl font-semibold">
          Game Mind Studios: Quem Somos
        </h1>
        <p className="text-gray-500 my-6">
          A Game Mind é uma spin-off acadêmica constituída em 2020 a partir de
          projetos de pesquisa e mestrado desenvolvidos no Instituto Metrópole
          Digital (IMD) da UFRN. Fazendo parte do setor de EdTechs, nos
          consideramos um estúdio de games especialista em educação. Nosso
          principal produto (em desenvolvimento) é uma plataforma online de
          jogos digitais inovadores que visa criar uma nova cultura de inovação
          nas escolas.
        </p>
        <button
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="text-white bg-pinkbutton border-pinkbutton border-2 rounded-full px-8 py-3"
        >
          Saiba mais
        </button>
      </div>
      <div className="ml-auto justify-center self-center w-full md:w-1/2 px-3">
        <img src="/images/about.png" alt="" />
      </div>
    </div>
  )
}

export default About
