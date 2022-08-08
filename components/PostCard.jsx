import React from 'react'

import Link from 'next/link'

export const PostCard = ({ image = ' ', title = ' ', text = ' ' }) => {
  return (
    <div className="w-full flex flex-wrap px-4 sm:pr-8 mb-8">
      <Link href=" ">
        <img
          className="object-cover sm:h-24 sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg mb-4"
          src={image}
          alt="image-blog-link"
        />
      </Link>
      <div className="sm:w-1/2 lg:w-2/3 sm:pl-6 px-2">
        <h3 className="text-base font-bold text-slate-800 tracking-wide leading-relaxed mb-3">
          {title}
        </h3>
        {text}
      </div>
    </div>
  )
}

export default PostCard
