'use client'

import PersonalDetails from '../components/PersonalDetails'
import EmploymentHistory from '../components/EmploymentHistory'
import Education from '../components/Education'
import Resume from '../components/Resume'
import React, { useState } from 'react'
import Skills from '../components/Skills'

export default function Builder() {
  const [personalDetails, setPersonalDetails] = useState({})
  const personalInformation = (info: any) => {
    setPersonalDetails(info)
  }
  return (
    <main className="flex h-screen">
      <div className="flex flex-col w-1/2 overflow-y-auto">
        <div className="flex-1 p-12">
          <PersonalDetails personalInfo={personalInformation} />
          <EmploymentHistory />
          <Education />
          <Skills />
        </div>
      </div>
      <div className="flex flex-col bg-gray-500 w-1/2">
        <div className="flex items-center px-[7.5rem] p-2">
          <svg
            id="SvgjsSvg1011"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs id="SvgjsDefs1012"></defs>
            <g id="SvgjsG1013">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM213.333 362.667 138.667 288l29.864-29.864 44.802 44.802L324.271 192l29.865 29.864-140.803 140.803z"
                  fill="#000"
                  className="color000 svgShape"
                ></path>
              </svg>
            </g>
          </svg>
          <span className="ml-2 text-white text-xs">Saved</span>
        </div>
        <Resume personalDetails={personalDetails} />
      </div>
    </main>
  )
}
