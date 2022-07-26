import React from 'react'

export const Banner = () => {
  return (
    <div className="banner p-3 py-16 bg-banner-gradient">
      <div className="container flex md:flex-row flex-col justify-between items-start mx-auto">
        <div className="flex flex-row flex-wrap w-1/3 pt-40 mr-3.5 ml-3.5 box-border px-3.5">
          <h1 className="text-white text-4xl text-center font-semibold">
            Game Mind
          </h1>
          <p className="text-white pb-4 tracking-wide leading-relaxed">
            Plataforma Online de Jogos Digitais Inovadores para Aprendizagem de
            Matemática e Língua Portuguesa.
          </p>
          <div className="text-center">
            <button className="text-white text-base text-center font-semibold hover:bg-white py-3 px-4 border-2 rounded-full cursor-pointer hover:text-pink-600">
              Nossa história
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-full"
            alt="image-banner"
            src="/images/avantasia.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
