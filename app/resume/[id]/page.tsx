'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function EditResume() {
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
    <>
      <div
        className={
          active
            ? 'sticky top-0 text-white bg-gray-800 py-4'
            : 'sticky top-0 text-gray-800 py-4'
        }
      >
        <div className="flex items-center justify-between max-w-[1096px] px-[7.5rem] mx-auto">
          <div className="text-[1rem] cursor-pointer font-semibold hover:underline p-2 mt-3">
            <Link href="/">Back to Editor</Link>
          </div>
          <button className="px-10 rounded-md py-3 text-white bg-green-800 hover:bg-green-700 text-sm">
            Download PDF
          </button>
        </div>
      </div>

      <div className="max-w-[1096px] flex flex-col items-center mx-auto font-mono h-[1123px] justify-center px-[7.5rem] py-6">
        <div className="flex shadow-md w-full h-full bg-white rounded-md">
          <div className="w-[70%] px-6 py-8">
            <h2 className="text-3xl font-bold mt-2 p-1 text-gray-800">
              Stranger Mushwana
            </h2>
            <div className="text-[0.8rem] pl-2 text-gray-600 uppercase">
              Space Pirate
            </div>
            <div className="font-sans mt-3 p-2">
              <h2 className="font-semibold text-lg my-1 font-mono text-gray-800">
                Profile
              </h2>
              <div className="text-[0.8rem] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, magnam. Nostrum a aspernatur nulla reiciendis
                tenetur, et tempore blanditiis natus aliquam voluptate sequi
                quaerat! Itaque impedit voluptatum, quo quis, commodi doloremque
                totam laudantium mollitia iste provident illum reprehenderit est
                dolorum!
              </div>
            </div>
            <div className="font-sans p-2 mt-5">
              <h2 className="font-semibold text-lg font-mono text-gray-800">
                Employment History
              </h2>
              <div className="mt-3">
                <div className="font-sans text-[0.8rem] font-semibold my-2">
                  Vet Assistant at Capricon Animal Health, Polokwane
                </div>
                <div className="text-[0.8rem] font-thin mb-1 text-gray-600 uppercase">
                  May 2020 - June 2020
                </div>
                <div className="text-[0.8rem] font-[3rem] text-gray-900">
                  Assisted vet with exams, diagnostic tests, surgery, treatment
                  procedures. performed lab tests and kept medical records
                </div>
              </div>
              <div className="mt-5">
                <div className="font-sans text-[0.8rem] font-semibold my-2">
                  Animal Health Technician at Agricultural Sector Educational
                  Training Authority (AgriSETA), Polokwane
                </div>
                <div className="text-[0.8rem] font-thin mb-1 text-gray-600 uppercase">
                  March 2022 - June 2022
                </div>
                <div className="text-[0.8rem] font-[3rem] text-gray-900">
                  I provided support to the farm by performing various tasks.
                  These included vaccinating chickens, conducting treatment
                  procedures, weighing eggs, and diligently inspecting them for
                  any potential deficiencies.
                </div>
              </div>
            </div>
            <div className="font-sans p-2 mt-5">
              <h2 className="font-semibold text-lg font-mono text-gray-800">
                Education
              </h2>
              <div className="history">
                <div className="font-sans text-[0.8rem] font-semibold my-2">
                  Diploma - Animal Health, University of North West
                </div>
                <div className="text-[0.8rem] font-thin mb-1 text-gray-600 uppercase">
                  February 2019 - December 2021
                </div>
                <div className="text-[0.8rem] font-[3rem] text-gray-900">
                  Gained the required foundation in all aspects of animal
                  diseases and health, including anatomy and physiology,
                  nutrition, pharmacology and toxicology
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#082A4D] w-[34%] text-white px-6 pt-[7rem] rounded-r-md">
            <h2 className="font-semibold text-lg font-mono">Details</h2>
            <div className="font-sans">
              <div className="text-[0.7rem] my-1">Cape Town</div>
              <div className="text-[0.7rem] my-1">South Africa</div>
              <div className="text-[0.7rem] my-1">0734345565</div>
              <div className="text-[0.7rem] mb-1 underline">
                stranger@apples.com
              </div>
              <div className="mt-8">
                <h2 className="font-semibold text-lg font-mono">Skills</h2>
                <div className="text-[0.8rem] my-1">
                  Able to Operate Under Pressure
                  <div className="w-full p-[0.2rem] mt-[0.3rem] bg-white"></div>
                </div>
                <div className="text-[0.8rem] my-1">
                  Effective Time Management
                  <div className="w-full p-[0.2rem] mt-[0.3rem] bg-white"></div>
                </div>
                <div className="text-[0.8rem] my-1">
                  Team Player
                  <div className="w-full p-[0.2rem] mt-[0.3rem] bg-white"></div>
                </div>
                <div className="text-[0.8rem] my-1">
                  Adaptablity
                  <div className="w-full p-[0.2rem] mt-[0.3rem] bg-white"></div>
                </div>
                <div className="text-[0.8rem] my-1">
                  Ability to Multitask
                  <div className="w-full p-[0.2rem] mt-[0.3rem] bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
