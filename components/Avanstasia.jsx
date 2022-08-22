import React from 'react'

export const Avantasia = ({
  title,
  description,
  imageURL,
  title2,
  description2,
  imageURL2
}) => {
  return (
    <div className="w-full bg-purplebg py-8">
      <div className="container mx-auto py-8 px-3 flex flex-wrap flex-col md:flex-row w-full items-center text-center sm:text-start">
        <div className="w-full">
          <div className="ml-auto justify-center self-center w-full md:w-1/2  md:float-left my-auto">
            <img src={imageURL} alt="" />
          </div>
          <div className="py-8 w-full text-center md:w-5/12 md:float-right">
            <h2 className="text-white text-3xl font-semibold">{title}</h2>
            <p className="text-white text-base my-6 tracking-wide leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="ml-auto justify-center self-center w-full md:w-1/2 md:float-right">
            <img src={imageURL2} alt="" />
          </div>
          <div className="py-8 w-full md:w-5/12 md:float-left">
            <h1 className="text-white text-3xl font-semibold">{title2}</h1>
            <p className="text-white my-6 tracking-wide leading-relaxed">
              {description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avantasia
