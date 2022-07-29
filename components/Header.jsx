import React from 'react'

import Link from 'next/link'

export const Header = ({ currentPage }) => {
  return (
    <nav className="header p-3 absolute w-full">
      <div className="container flex items-center mx-auto">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              <img src="/images/logo2.png" alt="Gamemind" />
            </span>
          </a>
        </Link>
        <div className="sm:block ml-auto">
          <div className="w-full lg:h-auto">
            <Link href="/">
              <a
                className={`w-full px-3 py-2 rounded text-white ${
                  currentPage == 'home' ? 'font-bold' : 'font-normal'
                }`}
              >
                Início
              </a>
            </Link>

            {/*BLOG*/}
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
    </nav> /*end of NAVBAR*/
  )
}

export default Header
