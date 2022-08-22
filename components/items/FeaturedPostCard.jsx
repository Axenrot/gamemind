import React from 'react'

import Link from 'next/link'

export const FeaturedPostCard = () => {
  return (
    <div className="w-full mb-3">
      <Link href="/blog/1" passHref>
        <a>
          <div className="rounded-xl w-full h-max overflow-hidden">
            <img
              className="transition-all duration-500 hover:scale-110 w-full"
              src="/images/blog-section.jpg"
              alt="blog-section"
            />
          </div>
          <div className="rounded-xl bg-white p-6 mx-4 relative -top-8 shadow-lg">
            <h3 className="font-bold text-base tracking-wide mb-2 text-slate-800">
              Como gravar e disponibilizar videoaulas utilizando o Canva
            </h3>
            <p className="opacity-80 font-semibold">Leia Mais</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default FeaturedPostCard
