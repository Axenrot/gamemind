import React from 'react'

import posts from '../public/posts'

import FeaturedPostCard from './items/FeaturedPostCard'
import PostCard from './items/PostCard'

export const BlogSection = ({ expand = false }) => {
  const posts3 = posts.slice(0, 3)
  const posts5 = posts.slice(3, 5)
  const indexTitle = (
    <div className="w-full px-4 text-center sm:text-start sm:px-0 py-16">
      <h2 className="text-3xl sm:text-5xl font-bold tracking-wide leading-relaxed text-slate-800">
        Confira nosso blog
      </h2>
      <p className="text-neutral-600 mt-4 tracking-wide leading-relaxed">
        Conteúdos para lhe manter atualizado sobre games, tecnologia e educação.
      </p>
    </div>
  )

  return (
    <div className="container px-3 mx-auto">
      {!expand && indexTitle}

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-2">
          <FeaturedPostCard />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 sm:pl-2">
          {posts3.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        {expand && posts5.map(post => <PostCard key={post.id} {...post} />)}
      </div>
    </div>
  )
}

export default BlogSection
