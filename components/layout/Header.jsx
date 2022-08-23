import React, { useEffect } from 'react'
import { useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'

export const Header = ({ currentPage }) => {
  gsap.registerPlugin(ScrollTrigger)
  const navbar = useRef()
  useEffect(() => {
    gsap.to(navbar.current, {
      scrollTrigger: {
        start: '120px top',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      position: 'fixed'
    })
  })

  return (
    <>
      <nav className="header-navbar p-3 absolute z-40 w-full">
        <div className="container flex items-center mx-auto">
          <Link href="/">
            <a className=" p-2">
              <img src="/images/logo.png" alt="logo-gamemind" />
            </a>
          </Link>
          <div className="ml-auto">
            <div className="w-full">
              <Link href="/">
                <a
                  className={`lg:w-auto w-full px-3 py-2 rounded text-white ${
                    currentPage == 'home' ? 'font-bold' : 'font-normal'
                  }`}
                >
                  Início
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className={`lg:w-auto w-full px-3 py-2 rounded text-white ${
                    currentPage == 'blog' ? 'font-bold' : 'font-normal'
                  }`}
                >
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav
        ref={navbar}
        className="header-navbar p-3 absolute z-40 w-full bg-white bg-opacity-95 shadow-xl -translate-y-[300px] opacity-0"
      >
        <div className="container flex items-center mx-auto">
          <Link href="/">
            <a className=" p-2">
              <img src="/images/logo2.png" alt="logo-gamemind" />
            </a>
          </Link>
          <div className="ml-auto">
            <div className="w-full">
              <Link href="/">
                <a
                  className={`transition-all duration-300 lg:w-auto w-full px-3 py-2 rounded text-slateblue2 hover:text-pinkbutton2  ${
                    currentPage == 'home' ? 'font-bold' : 'font-normal'
                  }`}
                >
                  Início
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className={`transition-all duration-300 lg:w-auto w-full px-3 py-2 rounded text-slateblue2 hover:text-pinkbutton2 ${
                    currentPage == 'blog' ? 'font-bold' : 'font-normal'
                  }`}
                >
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
