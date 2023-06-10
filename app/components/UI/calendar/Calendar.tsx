import React from 'react'

export default function Calendar() {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return (
    <div className="max-w-[250px] shadow-md p-2 rounded-lg flex flex-col">
      <div className="flex items-center justify-between">
        <div className="cursor-pointer group">
          <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="left-arrow"
          >
            <path
              fill="#838CA2"
              className="group-hover:fill-blue-500"
              d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"
            ></path>
          </svg>
        </div>
        <div className="bg-blue-500 px-3 py-2 text-white rounded-full">
          2021
        </div>
        <div className="cursor-pointer group">
          <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="right-arrow"
          >
            <path
              fill="#838CA2"
              className="group-hover:fill-blue-500"
              d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-3 max-w-[250px] grid grid-cols-4">
        {months.map((month: string) => (
          <div
            key={month}
            className="px-3 cursor-pointer py-2 hover:bg-blue-200 hover:text-blue-600 text-gray-800 rounded-full w-fit"
          >
            {month}
          </div>
        ))}
      </div>
      <div className="max-w-[250px] pl-3 mt-2">
        <label className="relative inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-2 text-sm text-gray-500">
            Currently work here
          </span>
        </label>
      </div>
    </div>
  )
}
