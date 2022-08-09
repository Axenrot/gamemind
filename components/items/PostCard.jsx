import React from 'react'

import Link from 'next/link'

export const PostCard = ({ id= '', image = ' ', title = ' ', text = ' ' }) => {
  return (
    <div className="w-full flex flex-wrap mb-8">
      <Link href=" ">
        <img
          className="object-cover sm:h-24 sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg mb-4"
          src={image}
          alt="image-blog-link"
        />
      </Link>
      <div className="sm:w-1/2 lg:w-2/3 sm:pl-2 text-base sm:text-xs md:text-sm lg:text-base">
        <h3 className=" font-bold text-slate-800 tracking-wide leading-relaxed sm:mb-1 md:mb-2 ">
          {title}
        </h3>
        {text}
      </div>
    </div>
  )
}

export default PostCard
