import React from 'react'

export const AuthorDescription = () => {
  return (
    <div className="container flex flex-wrap sm:flex-nowrap bg-pink py-7 rounded-xl mx-auto sm:w-full shadow-xl">
      <img
        className="w-48 h-48 rounded-full ml-4 sm:ml-10"
        src="/images/author.png"
        alt="author-img"
      />
      <div className="text-white text-sm sm:text-lg sm:items-center px-6 pt-4">
        <p className="text-white px-10">Autor</p>
        <h1 className="text-2xl sm:text-3xl font-bold px-10">Samanta Aires</h1>
        <p className="text-white text-sm sm:text-base text-justify px-10 pt-4">
          É sócia fundadora da Game Mind, graduada em Tecnologia da Informação e
          Mestre em Inovação em Tecnologias Educacionais pela UFRN. Foi
          professora de robótica educacional, desenvolvedora de software e
          gestora técnica no projeto de PD&I que desenvolveu o jogo Pharos no
          IMD/UFRN.
        </p>
      </div>
    </div>
  )
}

export default AuthorDescription
