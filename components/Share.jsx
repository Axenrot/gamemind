import React from 'react'

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

export const Share = ({ vertical = false }) => {
  const horizontalShare = (
    <div className="flex flex-wrap sm:flex-nowrap place-content-start sm:place-content-end items-center">
      <span className="font-bold mr-2">Compartilhar:</span>
      <button className="transition-all duration-300 text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink rounded-md px-2 py-1 mx-1">
        <FaFacebook />
      </button>
      <button className="transition-all duration-300 text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink rounded-md px-2 py-1 mx-1">
        <FaTwitter />
      </button>
      <button className="transition-all duration-300 text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink rounded-md px-2 py-1 mx-1">
        <FaWhatsapp />
      </button>
      <button className="transition-all duration-300 text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink rounded-md px-2 py-1 mx-1">
        <FaLinkedin />
      </button>
    </div>
  )

  const verticalShare = (
    <div className="flex flex-col h-full flex-nowrap mb-5 -mt-5">
      <button className="transition-all duration-300 my-1 p-2 rounded-full text-lg text-pinkbutton2 font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink">
        <FaWhatsapp />
      </button>
      <button className="transition-all duration-300 my-1 p-2 rounded-full text-lg text-pinkbutton2 font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink">
        <FaFacebookF />
      </button>
      <button className="transition-all duration-300 my-1 p-2 rounded-full text-lg text-pinkbutton2 font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink">
        <FaTwitter />
      </button>
      <button className="transition-all duration-300 my-1 p-2 rounded-full text-lg text-pinkbutton2 font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink">
        <FaLinkedin />
      </button>
    </div>
  )

  return (
    <>
      {!vertical && horizontalShare}
      {vertical && verticalShare}
    </>
  )
}

export default Share
