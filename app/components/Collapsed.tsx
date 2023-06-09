import React from 'react'
import DownArrow from './UI/DownArrow'

export default function Collapsed() {
  return (
    <div className="flex items-center w-[99%]">
      <div className="group cursor-pointer w-full rounded-md p-4 border border-gray-300">
        <div className="flex items-center w-full justify-between">
          <div className="left">
            <div className="text-[0.8rem] group-hover:text-yellow-700 font-semibold pl-2 text-gray-900">
              National Deploma(Soil Science)
            </div>
            <div className="text-[0.8rem] pl-2 my-1 text-gray-400">
              May 2020 - June 2020
            </div>
          </div>
          <DownArrow />
        </div>
      </div>
      <div className="w-[1%] pl-2 ml-auto cursor-pointer">
        <svg
          id="SvgjsSvg1053"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs id="SvgjsDefs1054"></defs>
          <g id="SvgjsG1055">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <g fill="#d8d3d3" className="color757575 svgShape">
                <path
                  d="M15 5V3H9v2H3v2h18V5zM5 8v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8H5zm6 10H9v-6h2v6zm4 0h-2v-6h2v6z"
                  fill="#d8d3d3"
                  className="color000 svgShape hover:stroke-yellow-900"
                ></path>
              </g>
            </svg>
          </g>
        </svg>
      </div>
    </div>
  )
}
