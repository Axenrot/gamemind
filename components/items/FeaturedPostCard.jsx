import React from 'react'

import Link from 'next/link'

export const FeaturedPostCard = () => {
  return (
    <div className="">
      <div className="w-full mb-8">
        <Link href="/blog/1" passHref>
          <a>
            <img
              className="rounded-xl w-full"
              src="/images/blog-section.jpg"
              alt="blog-section"
            />
            <div className="rounded-xl bg-white p-6 mx-4 relative -top-8 shadow-lg">
              <h3 className="font-bold text-base tracking-wide mb-2 text-slate-800">
                Como gravar e disponibilizar videoaulas utilizando o Canva
              </h3>
              <p className="text-blue-900 font-semibold">Leia Mais</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedPostCard
