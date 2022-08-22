import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'

import { gsap } from 'gsap'
import Link from 'next/link'

export const Header = ({ currentPage }) => {
  const navbar = useRef()
  useLayoutEffect(() => {
    gsap.fromTo(
      navbar.current,
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 3 }
    )
  })

  return (
    <nav ref={navbar} className="header-navbar p-3 absolute w-full">
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
                className={`w-full px-3 py-2 rounded text-white ${
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
  )
}

export default Header
