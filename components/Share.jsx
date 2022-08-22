import React from 'react'

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

export const Share = () => {
  return (
    <div className="container flex flex-wrap sm:flex-nowrap place-content-start sm:place-content-end items-center">
      <h1 className="font-bold pb-2">Compartilhar:</h1>
      <div className="px-2">
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          <FaFacebook />
        </button>
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          <FaTwitter />
        </button>
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          <FaWhatsapp />
        </button>
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          <FaLinkedin />
        </button>
      </div>
    </div>
  )
}

export default Share
