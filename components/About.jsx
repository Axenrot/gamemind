import Link from 'next/link'
import React from 'react'

export const About = ({ title, description, cta, imageURL }) => {
  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row">
      <div className="py-8 w-full md:w-5/12 px-3 text-center sm:text-start">
        <h1 className="text-slate-800 text-4xl font-semibold">{title}</h1>
        <p className="text-gray-500 my-6">{description}</p>
        <Link href={cta.href} passHref>
          <a className="btn-primary">{cta.title}</a>
        </Link>
      </div>
      <div className="ml-auto justify-center self-center w-full md:w-1/2 px-3">
        <img src={imageURL} alt="" />
      </div>
    </div>
  )
}

export default About
