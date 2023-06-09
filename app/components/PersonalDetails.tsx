import React from 'react'

export default function PersonalDetails() {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold p-1">Personal Details</h2>
      <div className="flex pt-1">
        <div className="p-2 w-1/2">
          <div className="p-1">
            <label className="block mb-2 text-sm font-md text-gray-500">
              Wanted Job Title
            </label>
            <input
              type="text"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder="e.g. Software Developer"
            />
          </div>
        </div>
        {/* <div className="p-2 w-1/2">
          <div className="p-1">
            <label className="block mb-2 text-sm font-md text-gray-500">
              Last Name
            </label>
            <input
              type="text"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder="e.g. Richards"
            />
          </div>
        </div> */}
      </div>
      <div className="flex">
        <div className="p-2 w-1/2">
          <div className="p-1">
            <label className="block mb-2 text-sm font-md text-gray-500">
              First Name
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
              Last Name
            </label>
            <input
              type="text"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder="e.g. Manny"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 w-1/2">
          <div className="p-1">
            <label className="block mb-2 text-sm font-md text-gray-500">
              Email
            </label>
            <input
              type="email"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder=""
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="p-1">
            <label className="block mb-2 text-sm font-md text-gray-500">
              Phone Number
            </label>
            <input
              type="text"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 w-1/2">
          <div className="p-1">
            <label className="block mb-2 text-sm font-md text-gray-500">
              Country
            </label>
            <input
              type="text"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder=""
            />
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
              placeholder=""
            />
          </div>
        </div>
      </div>
      {/*  */}
      <h2 className="text-2xl font-bold mt-6 p-1">Summary</h2>
      <div className="py-1">
        <div className="p-1">
          <label className="block mb-2 text-sm p-1 font-sm text-gray-600">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </label>
          <textarea
            rows={6}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-100 outline-none focus:border-b-2"
            placeholder="Your professional summary..."
          />
        </div>
      </div>
    </div>
  )
}
