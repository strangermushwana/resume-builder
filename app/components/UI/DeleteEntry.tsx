import React from 'react'

export default function DeleteEntry() {
  return (
    <div className="flex flex-col">
      <div className="ml-auto cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          id="close"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 29 29"
          xmlSpace="preserve"
          width="25"
          height="25"
        >
          <path
            fill="none"
            stroke="#d8d3d3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            className="colorStroke000 svgStroke hover:stroke-yellow-700"
            strokeWidth="2"
            d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col px-5 py-2">
        <h2 className="text-2xl font-bold mb-1">Delete Entry</h2>
        <div className="text-md text-left">
          Are you sure you want to delete this entry?
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center mb-4 mr-20">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-900">
              Dont show again
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <div className="px-8 py-3 font-semibold text-sm w-fit cursor-pointer border border-gray-200">
              Delete
            </div>
            <div className="px-8 py-3 font-semibold text-sm w-fit cursor-pointer bg-blue-500 text-white">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
