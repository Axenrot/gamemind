import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/dist/client/link'

export const Banner = ({ title, description, cta, imageURL }) => {
  const angle = useRef()
  const angle2 = useRef()
  const bigcircle = useRef()
  const circlearm = useRef()
  const tl = gsap.timeline({ repeat: -1 })
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(angle.current, {
      scrollTrigger: {
        scrub: 5
      },
      x: -100,
      y: -500,
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
    tl.to(circlearm.current, 5, {
      rotation: 360,
      transformOrigin: 'left',
      ease: Power0.easeNone,
      repeat: -1
    })
  })

  return (
    <div className="relative flex banner py-8 bg-banner-gradient w-full overflow-hidden -z-40 h-[100vh]">
      <div animatedComponents>
        <img
          ref={angle}
          className="absolute left-[8%] -bottom-[10%] -z-10 self-end hidden md:block md:scale-125"
          alt="image-banner"
          src="/images/angle.png"
        />
        <img
          ref={angle2}
          className="absolute right-[4%] -bottom-[10%] -z-10 self-end hidden md:block md:scale-125"
          alt="image-banner"
          src="/images/angle-2.png"
        />
        <div className="w-[12vw] h-[12vw] absolute border-2 border-white rounded-full bottom-[-7vw] left-[35%]" />
        <div
          ref={circlearm}
          className="h-0 w-0 absolute -z-40 right-[45%] bottom-[0%]"
        >
          <div
            ref={bigcircle}
            className="relative bg-white opacity-10 w-[80vw] h-[80vw] right-[40vw] bottom-[60vh] -z-40  rounded-full"
          />
        </div>
      </div>

      <div className="container flex md:flex-row flex-col justify-between items-center mx-auto">
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
        <div className="w-full sm:w-4/5 md:w-3/5">
          <img className="w-full" alt="" src={imageURL} />
        </div>
      </div>
    </div>
  )
}

export default Banner
