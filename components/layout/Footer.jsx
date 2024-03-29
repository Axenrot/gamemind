import React from 'react'

import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-gray-50 h-1/2 w-full pb-8">
        <div className="container flex md:flex-row flex-col justify-between items-start mx-auto">
          <div className="p-5">
            <img src="/images/logo2.png" alt="image-logo" />
          </div>

          <div className="p-5">
            <ul>
              <p className="text-lg font-medium pb-6">
                <span>Acompanhe nas redes:</span>
              </p>
              <div className="flex gap-6">
                <div className="transition-all duration-300 cursor-pointer hover:text-pink">
                  <a
                    href="https://www.instagram.com/gamemindstudios/"
                    target="blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className="transition-all duration-300 cursor-pointer hover:text-pink">
                  <a
                    href="https://www.facebook.com/gamemindstudios"
                    target="blank"
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div
                  className="transition-all duration-300 cursor-pointer hover:text-pink"
                  target="blank"
                >
                  <a href="https://twitter.com/gamemindstudios" target="blank">
                    <FaTwitter />
                  </a>
                </div>
                <div className="transition-all duration-300 cursor-pointer hover:text-pink">
                  <a
                    href="https://www.linkedin.com/company/gamemindstudios/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="transition-all duration-300 cursor-pointer hover:text-pink">
                  <a
                    href="https://www.youtube.com/channel/UC2cSWokWK75CddMPvV58B4g"
                    target="blank"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-black items-center">
        <h1 className="text-white text-sm text-center">
          Game Mind Studios © 2022 . Todos os direitos reservados.
        </h1>
      </div>
    </footer>
  )
}

export default Footer
