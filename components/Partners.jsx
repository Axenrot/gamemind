import React from 'react'

import Newsletter from './Newsletter'

export const Partners = () => {
  return (
    <>
      <div className="flex flex-col bg-gray mx-auto items-center pt-20">
        <h2 className="basis-full text-lg text-slate-500 mb-12">
          Nossos parceiros
        </h2>
        <div className="container flex flex-wrap sm:flex-nowrap mx-auto pb-24 items-center">
          <img
            className="object-scale-down w-1/2 sm:w-1/4 px-6"
            src="/images/logo-inova.png"
            alt="logo-inova"
          />

          <img
            className="object-scale-down w-1/2 sm:w-1/4 px-6"
            src="/images/logo-sebrae.png"
            alt="logo-inova"
          />

          <img
            className="object-scale-down w-1/2 sm:w-1/4 px-6"
            src="/images/logo-centelha.png"
            alt="logo-inova"
          />

          <img
            className="object-scale-down w-1/2 sm:w-1/4 px-6"
            src="/images/logo-pong.png"
            alt="logo-inova"
          />
        </div>
      </div>
      <Newsletter />
    </>
  )
}

export default Partners