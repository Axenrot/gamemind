import React from 'react'

export const AuthorDescription = ({ name, description }) => {
  return (
    <div className="container flex flex-wrap sm:flex-nowrap bg-pink py-7 rounded-xl mx-auto sm:w-full shadow-xl place-content-center">
      <img
        className="w-48 h-48 rounded-full sm:ml-10"
        src="/images/author.png"
        alt="author-img"
      />
      <div className="text-white text-sm sm:text-lg sm:items-center px-6 pt-4">
        <p className="text-white px-10">Autor</p>
        <h1 className="text-2xl sm:text-3xl font-bold px-10">{name}</h1>
        <p className="text-white text-sm sm:text-base text-justify px-10 pt-4">
          {description}
        </p>
      </div>
    </div>
  )
}

export default AuthorDescription
