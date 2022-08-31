import React, { useEffect, useRef } from 'react'

import gsap, { Power0 } from 'gsap'
import Reveal from 'react-reveal/Reveal'

export const Avantasia = ({
  title,
  description,
  imageURL,
  title2,
  description2,
  imageURL2
}) => {
  const circlebgcontainer = useRef()
  const circlebg = useRef()

  useEffect(() => {
    gsap.to(circlebgcontainer.current, {
      rotation: 360,
      repeat: -1,
      ease: Power0.easeNone,
      transformOrigin: '53% 53%',
      duration: 5
    })
    gsap.to(circlebg.current, {
      rotation: -360,
      repeat: -1,
      ease: Power0.easeNone,
      duration: 5
    })
  })
  return (
    <div className="w-full overflow-hidden">
      <div
        id="background"
        className="relative bg-purplebg left-[50%] -translate-x-[50%] h-fit w-[8000px] rounded-[50%] -z-20"
      >
        <div className="w-[100vw] sm:container mx-auto py-8 px-3 flex flex-wrap flex-col md:flex-row w-full items-center text-center sm:text-start">
          <div className="w-full">
            <Reveal effect="zoom-in" duration={500}>
              <div className="flex ml-auto justify-center self-center w-full lg:w-1/2  lg:float-left my-auto">
                <img src={imageURL} alt="" />
                <div
                  ref={circlebgcontainer}
                  className="absolute -z-20 sm:top-[50px] lg:top-[20px] xl:top-[50px]"
                >
                  <div
                    ref={circlebg}
                    className="relative rounded-full avantasiabg opacity-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px]"
                  />
                </div>
              </div>{' '}
            </Reveal>

            <div className="py-8 w-full text-center lg:w-5/12 lg:float-right">
              <Reveal effect="fade-up" duration={500}>
                <h2 className="text-white text-3xl font-semibold">{title}</h2>
              </Reveal>
              <Reveal effect="fade-up">
                <p className="text-white text-base my-6 tracking-wide leading-relaxed">
                  {description}
                </p>
              </Reveal>
            </div>
          </div>
          <div className="w-full">
            <Reveal effect="zoom-in">
              <div className="ml-auto justify-center self-center w-full lg:w-1/2 lg:float-right">
                <img src={imageURL2} alt="" />
              </div>
            </Reveal>

            <div className="py-8 w-full lg:w-5/12 lg:float-left">
              <Reveal effect="fade-up" duration={500}>
                <h1 className="text-white text-3xl font-semibold">{title2}</h1>
              </Reveal>
              <Reveal effect="fade-up">
                <p className="text-white my-6 tracking-wide leading-relaxed">
                  {description2}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avantasia
