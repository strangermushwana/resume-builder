import React, { useState } from 'react'
import Collapsed from './Collapsed'
import UpArrow from './UI/UpArrow'

export default function Skills() {
  const [show, setShow] = useState(false)

  function showFull() {
    setShow(() => !show)
  }
  return (
    <div className="flex flex-col mt-4">
      <h2 className="text-2xl font-bold p-1">Skills</h2>
      <label className="block mb-2 text-sm p-1 font-sm text-gray-600">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </label>
      <div onClick={showFull} className="mt-2">
        {!show && <Collapsed />}
      </div>
      {show && (
        <div className="flex items-center">
          <div className="p-3 mt-2 shadow-md border-t rounded-md w-[99%]">
            <div className="group py-2">
              <div
                onClick={showFull}
                className="flex items-center mx-auto group-hover:text-yellow-900 w-full justify-between"
              >
                <div className="left">
                  <div className="text-[0.8rem] group-hover:text-yellow-700 font-semibold pl-2 text-gray-900">
                    Team Player
                  </div>
                  <div className="text-[0.8rem] pl-2 my-1 text-gray-400">
                    Expert
                  </div>
                </div>
                <div className="pr-2 pb-1">
                  {' '}
                  <UpArrow />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="p-2 w-1/2">
                <div className="p-1">
                  <label className="block mb-2 text-sm font-md text-gray-500">
                    Skill
                  </label>
                  <input
                    type="text"
                    className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                    placeholder="e.g. Time Management"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="p-1">
                  <label className="block mb-2 text-sm font-md text-gray-500">
                    Level - <span className="text-yellow-800">Expert</span>
                  </label>
                  <input
                    type="text"
                    className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                    placeholder=""
                  />
                </div>
              </div>
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
      )}
      <div className="text-[0.8rem] cursor-pointer hover:bg-red-50 font-semibold p-2 mt-3 text-yellow-900">
        <span className="mr-1">+</span>Add One More Skill
      </div>
    </div>
  )
}
