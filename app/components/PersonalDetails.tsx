import React, { useState } from 'react'
import ImageUpload from '../theme/ImageUpload'

export default function PersonalDetails({ personalInfo }) {
  const [open, setOpen] = useState(false)
  const [personalInformation, setPersonalInformation] = useState({
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    professionalSummary: '',
  })

  function openFn(): void {
    setOpen(() => !open)
  }

  personalInfo(personalInformation)

  const handleUserDetailChange = (e: { target: { name: any; value: any } }) => {
    setPersonalInformation((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }))
  }

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
              onChange={handleUserDetailChange}
              name="jobTitle"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder="e.g. Software Developer"
            />
          </div>
        </div>
        {/* <div className="p-2 w-1/2">
          <div className="p-1">
            <div onClick={openFn} className="group flex items-center space-x-2">
              <div className="bg-gray-100 group-hover:bg-yellow-200 rounded-md w-fit p-4">
                <svg
                  id="SvgjsSvg1072"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs id="SvgjsDefs1073"></defs>
                  <g id="SvgjsG1074">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="#7d7d7d"
                        d="M16,13.29A6.15,6.15,0,1,0,9.86,7.14,6.15,6.15,0,0,0,16,13.29ZM16,3a4.15,4.15,0,1,1-4.14,4.14A4.15,4.15,0,0,1,16,3ZM27.38,26.81C26.18,29.9,20.72,31,16,31S5.82,29.9,4.62,26.81c-.64-1.65-.07-4.1,1.49-6.39A12.11,12.11,0,0,1,16,15a12.24,12.24,0,0,1,10.91,7.25,1,1,0,1,1-1.82.81A10.37,10.37,0,0,0,16,17a10.09,10.09,0,0,0-8.23,4.55c-1.34,1.95-1.61,3.72-1.29,4.54C7.14,27.78,11.14,29,16,29s8.86-1.22,9.52-2.91a1,1,0,0,1,1.86.72Z"
                        className="color22242b svgShape group-hover:stroke-gray-800"
                      ></path>
                    </svg>
                  </g>
                </svg>
              </div>
              <div className="text-sm">Upload Photo</div>
            </div>
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
              onChange={handleUserDetailChange}
              name="firstName"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder="e.g. Stranger"
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
              onChange={handleUserDetailChange}
              name="lastName"
              className="text-black bg-gray-100 text- outline-none focus:border-b-2 block w-full p-3"
              placeholder="e.g. Mushwana"
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
              onChange={handleUserDetailChange}
              name="email"
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
              onChange={handleUserDetailChange}
              name="phoneNumber"
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
              onChange={handleUserDetailChange}
              name="country"
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
              onChange={handleUserDetailChange}
              name="city"
              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-6 p-1">Summary</h2>
      <div className="py-1">
        <div className="p-1">
          <label className="block mb-2 text-sm p-1 font-sm text-gray-600">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </label>
          <textarea
            onChange={handleUserDetailChange}
            name="professionalSummary"
            style={{ resize: 'none' }}
            rows={6}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-100 outline-none focus:border-b-2"
            placeholder="Your professional summary..."
          />
        </div>
      </div>
      {open && <ImageUpload />}
    </div>
  )
}
