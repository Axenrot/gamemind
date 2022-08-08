import React from 'react'

import Link from 'next/dist/client/link'

export const Banner = () => {
  return (
    <div className="banner py-8 bg-banner-gradient w-full">
      <div className="container flex sm:flex-row flex-col justify-between items-center mx-auto">
        <div className="flex flex-row flex-wrap w-full sm:w-7/12 md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center sm:text-left justify-center sm:justify-start">
          <h1 className="text-white text-4xl w-full font-semibold pt-6 sm:pt-0">
            Game Mind
          </h1>
          <p className="text-white pb-4 tracking-wide leading-relaxed">
            Plataforma Online de Jogos Digitais Inovadores para Aprendizagem de
            Matemática e Língua Portuguesa.
          </p>
          <Link href="/About">
            <button className="text-white py-3 px-8 border-2 rounded-full cursor-pointer hover:text-pink hover:bg-white">
              Nossa história
            </button>
          </Link>
        </div>

        <div className="w-full sm:w-1/2">
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
