import React from 'react'

export const About = () => {
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
        <button className="text-white bg-pinkbutton border-pinkbutton hover:bg-white hover:text-pinkbutton border-2 rounded-full px-8 py-3">
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
