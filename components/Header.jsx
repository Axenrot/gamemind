import React from 'react'

import Link from 'next/link'

export const Header = ({ currentPage }) => {
  return (
    <nav className="header p-3 absolute left-0 top-0 w-full">
      <div className="container flex justify-center items-center flex-wraph-14 mx-auto pl-5 max-w-[1200px]">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              <img src="/images/logo2.png" alt="Gamemind" />
            </span>
          </a>
        </Link>
        <div className="md:hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a
                className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-white ${
                  currentPage == 'home' ? 'font-bold' : 'font-normal'
                }`}
              >
                Início
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-white ${
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
