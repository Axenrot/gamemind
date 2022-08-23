import React from 'react'

export const Tags = ({ tags }) => {
  return (
    <div className="container flex flex-wrap sm:flex-nowrap place-content-start items-center py-4">
      <h1 className="font-bold">Tags:</h1>
      <div className="px-2">
        {tags.map(tag => {
          return (
            <button
              key={tag}
              className="transition-all duration-300 text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:border-pink hover:bg-pink rounded-md px-2 py-1 mx-1"
            >
              {tag}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
