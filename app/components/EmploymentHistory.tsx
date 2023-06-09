import React from 'react'

export default function EmploymentHistory() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-2xl font-bold p-1">Employment History</h2>
      <label className="block mb-2 text-sm p-1 font-sm text-gray-600">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </label>
      <div className="p-2 mt-10 shadow-md border-t rounded-md">
        <div className="flex">
          <div className="p-2 w-1/2">
            <div className="p-1">
              <label className="block mb-2 text-sm font-md text-gray-500">
                Job Title
              </label>
              <input
                type="text"
                className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                placeholder="e.g. Charles"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="p-1">
              <label className="block mb-2 text-sm font-md text-gray-500">
                Employer
              </label>
              <input
                type="text"
                className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                placeholder="e.g. Charles"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="p-2 w-1/2">
            <label className="block px-1 mb-2 text-sm font-md text-gray-500">
              Start & End Date
            </label>
            <div className="flex space-x-3 p-1">
              <div className="w-1/2">
                <input
                  type="text"
                  className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                  placeholder="MM/YY"
                />
              </div>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="p-1">
              <label className="block mb-2 text-sm font-md text-gray-500">
                City
              </label>
              <input
                type="text"
                className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                placeholder="e.g. Charles"
              />
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="py-1">
            <div className="p-1">
              <label className="block mb-2 text-sm font-md text-gray-500">
                Description
              </label>
              <textarea
                style={{ resize: 'none' }}
                rows={10}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-100 outline-none focus:border-b-2"
                placeholder="e.g. Created mobile app in 30 seconds..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
