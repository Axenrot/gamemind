import React, { useEffect, useRef } from 'react'

import gsap, { Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import Reveal from 'react-reveal/Reveal'

export const Banner = ({ title, description, cta, imageURL }) => {
  const angle = useRef()
  const angle2 = useRef()
  const bigcircle = useRef()

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(angle.current, {
      scrollTrigger: {
        scrub: 3
      },
      x: -100,
      y: -1000,
      rotation: 360
    })
  })

  useEffect(() => {
    gsap.to(angle2.current, {
      scrollTrigger: {
        scrub: 5
      },
      x: 200,
      y: 200
    })
  })

  useEffect(() => {
    gsap.to(bigcircle.current, {
      rotation: 360,
      transformOrigin: '52% 52%',
      ease: Power0.easeNone,
      repeat: -1,
      duration: 10
    })
  })

  return (
    <div className="relative flex banner w-full overflow-hidden h-[100vh]">
      <div className="bg-banner-gradient absolute w-full h-full -z-40" />
      <div id="animatedcomponents">
        <img
          ref={angle}
          className="absolute left-[8%] -bottom-[10%] -z-20 self-end hidden md:block md:scale-125"
          alt="image-banner"
          src="/images/angle.png"
        />
        <img
          ref={angle2}
          className="absolute right-[4%] -bottom-[10%] -z-20 self-end hidden md:block md:scale-125"
          alt="image-banner"
          src="/images/angle-2.png"
        />
        <div
          ref={bigcircle}
          className="absolute left-[20vw] top-[40vh] -z-30 bg-white opacity-10 w-[100vw] h-[100vw] hidden md:block md:right-[40vw] lg:right-[40vw] lg:bottom-[60vh] md:bottom-[60vh] rounded-full"
        />
      </div>
      <div className="container flex md:flex-row flex-col justify-around md:justify-between items-center mx-auto">
        <Reveal effect="fade-up">
          <div className="flex flex-row flex-wrap w-full sm:w-full md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center md:text-left justify-center md:justify-start">
            <h1 className="text-white text-4xl w-full font-semibold pt-6 sm:pt-0">
              {title}
            </h1>
            <p className="text-white pb-4 tracking-wide leading-relaxed">
              {description}
            </p>
            <Link href={cta.href} passHref>
              <a className="btn-outline">{cta.title}</a>
            </Link>
          </div>
        </Reveal>
        <Reveal effect="fade-right">
          <div className="w-full sm:w-4/5 md:w-3/5">
            <img className="w-full" alt="" src={imageURL} />
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Banner
