import React from 'react'
import partners from '../../data/partners'

import Link from 'next/link'

import Newsletter from './Newsletter'

export const Partners = () => {
  const { title, items } = partners
  return (
    <>
      <div className="flex flex-col bg-gray mx-auto items-center pt-20">
        <h2 className="basis-full text-lg text-slate-500 mb-12">{title}</h2>
        <div className="container flex flex-wrap mx-auto pb-24 justify-center">
          {items.map(partner => {
            return (
              <Link key={partner.slug} href={partner.href} passHref>
                <a className="object-scale-down w-1/2 sm:w-1/4 px-6">
                  <img src={partner.imageURL} alt={partner.slug} />
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      <Newsletter />
    </>
  )
}

export default Partners
