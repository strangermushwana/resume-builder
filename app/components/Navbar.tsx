'use client'

import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState(false)

  const isActive = () => {
    window.scrollY > 5 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])
  return (
    <div
      className={
        active
          ? 'bg-black text-white p-8 border-b mb-2'
          : 'bg-white text-black p-8 border-b mb-2'
      }
    >
      <div className="max-w-6xl flex items-center mx-auto justify-around">
        <div className="font-bold text-lg text-gray-700 uppercase cursor-pointer">
          zaresume<span className="text-red-400 font-semibold text-2xl">.</span>
        </div>
        <div className="flex space-x-5 justify-center items-center">
          <div className="cursor-pointer uppercase text-xs hover:text-gray-900">
            Home
          </div>
          <div className="cursor-pointer uppercase text-xs hover:text-gray-900">
            My Account
          </div>
          <div className="cursor-pointer uppercase text-xs hover:text-gray-900">
            Contact
          </div>
        </div>
        <div className="border rounded-full p-1 cursor-pointer hover:ring-1 hover:ring-yellow-700">
          <svg
            id="SvgjsSvg1016"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs id="SvgjsDefs1017"></defs>
            <g id="SvgjsG1018">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 512 512"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  d="M376.9 175.9c-.3 49.8-31.7 96.2-78.8 113.4-48.2 17.6-102.7 2.8-135.5-36.6-32.4-38.9-36.2-96-10.2-139.1 26-43.3 78.1-66.4 127.7-56.2 49.2 10.1 87.5 50.3 95.5 99.8C376.5 163.4 376.9 169.7 376.9 175.9c.1 9.6 15.1 9.7 15 0-.3-56.7-36-107.9-89.2-127.6-53-19.7-115.2-2.9-151.2 40.7-36.4 44.2-41.7 108.2-11.8 157.4 29.6 48.5 87.3 73.6 142.9 62.8 54.8-10.7 99.1-56.7 107.5-111.9 1.1-7.1 1.7-14.2 1.7-21.3C392 166.3 377 166.3 376.9 175.9zM22.7 469.8c49.5-48.5 111.9-82.8 180.5-94.4 64.5-10.9 131.8-.6 190.7 27.6 35.2 16.9 67.3 39.6 95.3 66.8 6.9 6.7 17.6-3.9 10.6-10.6-51.1-49.4-115.6-85-185.9-97.6-67.8-12.2-137.8-2.8-200.3 26.3C76 405.5 41.8 430.1 12.1 459.2 5.2 465.9 15.8 476.5 22.7 469.8L22.7 469.8z"
                  fill="#8a8989"
                  className="color000 svgShape"
                ></path>
              </svg>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
