import React from 'react'

import Link from 'next/link'

export const PostCard = ({ id, img, title, text, expand }) => {
  const defaultPostCard = (
    <div className="w-full flex flex-wrap mb-8">
      <Link href="" passHref>
        <a className="w-full flex flex-col sm:flex-row">
          <img
            className="object-cover sm:h-28 sm:w-1/2 lg:w-1/3 rounded-t-md sm:rounded-md shadow-lg mb-4"
            src={img}
            alt={title}
          />

          <div className="sm:w-1/2 lg:w-2/3 p-5 sm:p-0 sm:pl-2 rounded-b-md text-base sm:text-xs md:text-sm lg:text-base shadow-xl sm:shadow-none">
            <h3 className="font-semibold sm:font-bold text-slate-800 tracking-wide leading-relaxed sm:mb-1 md:mb-2 ">
              {title}
            </h3>
            <div className="hidden sm:block">{text}</div>
            <div className="opacity-80 block sm:hidden mt-auto py-3 text-sm font-semibold">
              Leia Mais
            </div>
          </div>
        </a>
      </Link>
    </div>
  )

  const expandedPostCard = (
    <div className="w-full flex flex-wrap w-fit sm:w-1/3 mb-8 sm:m-2">
      <Link href="" passHref>
        <a className="w-full flex flex-col">
          <img
            className="object-cover rounded-t-md shadow-lg"
            src={img}
            alt={title}
          />

          <div className="flex flex-col font-semibold p-5 h-full shadow-xl text-base rounded-b-md sm:text-sm lg:text-base xl:text-lg">
            <h3 className=" text-slate-800 tracking-wide leading-relaxed sm:mb-1 md:mb-2 self-center justify-center">
              {title}
            </h3>
            <div className="mt-auto py-3 text-sm opacity-80">Leia Mais</div>
          </div>
        </a>
      </Link>
    </div>
  )

  return (
    <>
      {!expand && defaultPostCard}
      {expand && expandedPostCard}
    </>
  )
}

export default PostCard
