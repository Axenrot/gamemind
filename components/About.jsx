import React from 'react'

import Link from 'next/link'
import Reveal from 'react-reveal/Reveal'

export const About = ({ title, description, cta, imageURL }) => {
  return (
    <div className="container mx-auto pb-8 flex flex-col md:flex-row">
      <div className="py-8 w-full md:w-5/12 px-3 text-center sm:text-start">
        <Reveal effect="fade-up" duration={500}>
          <h1 className="text-slate-800 text-4xl font-semibold">{title}</h1>
        </Reveal>
        <Reveal effect="fade-up" duration={1000}>
          <p className="text-gray-500 my-6">{description}</p>
          <Link href={cta.href} passHref>
            <a className="btn-primary">{cta.title}</a>
          </Link>
        </Reveal>
      </div>

      <Reveal effect="fade-right" duration={500}>
        <div className="ml-auto justify-center self-center w-full md:w-1/2 px-3">
          <img src={imageURL} alt="" />
        </div>
      </Reveal>
    </div>
  )
}

export default About
