import Link from 'next/link'
import React from 'react'
import { IPersonalInformation } from '../models/PersonalInformation'
import { IEmploymentHistory } from '../models/EmploymentHistory'

interface Props {
  personalDetails: IPersonalInformation
  employmentData: IEmploymentHistory
}

export default function Resume({ personalDetails, employmentData }: Props) {
  const showDetailsSection = () => {
    const { phoneNumber, city, country, email } = personalDetails
    return [!!phoneNumber, !!city, !!country, !!email].includes(true)
  }
  const showSection = showDetailsSection()

  const showEmploymentHistorySection = () => {
    const { jobTitle, employer, startDate, endDate, city, description } =
      employmentData
    return [
      !!jobTitle,
      !!employer,
      !!startDate,
      !!endDate,
      !!city,
      !!description,
    ].includes(true)
  }
  const showEmployment = showEmploymentHistorySection()

  return (
    <div className="flex flex-col items-center font-mono justify-center h-full px-[7.5rem] pb-6">
      <div className="flex shadow-md w-full h-full bg-white rounded-md">
        <div className="w-[70%] px-6 py-8">
          <h2 className="text-xl font-bold mt-2 p-1 text-gray-800">
            {personalDetails?.firstName} {personalDetails?.lastName}
          </h2>
          <div className="text-[0.5rem] pl-2 text-gray-600 uppercase">
            {personalDetails?.jobTitle}
          </div>
          {personalDetails?.professionalSummary && (
            <div className="font-sans mt-3 p-2">
              <h2 className="font-semibold text-xs my-1 font-mono text-gray-800">
                Profile
              </h2>
              <div className="text-[7.5px] text-gray-700">
                {personalDetails.professionalSummary}
              </div>
            </div>
          )}
          {showEmployment && (
            <div className="font-sans p-2">
              <h2 className="font-semibold text-xs font-mono text-gray-800">
                Employment History
              </h2>
              <div className="history">
                <div className="font-sans text-[0.5rem] font-semibold my-1">
                  {employmentData?.jobTitle}
                  {employmentData?.employer && ` at ${employmentData.employer}`}
                  {employmentData?.city && `, ${employmentData.city}`}
                </div>
                <div className="text-[0.4rem] font-thin mb-1 text-gray-600 uppercase">
                  {employmentData?.startDate} - {employmentData?.endDate}
                </div>
                <div className="text-[7.5px] font-[3rem] text-gray-900">
                  {employmentData?.description}
                </div>
              </div>
              {/* <div className="mt-2">
                <div className="font-sans text-[0.5rem] font-semibold my-1">
                  Animal Health Technician at Agricultural Sector Educational
                  Training Authority (AgriSETA), Polokwane
                </div>
                <div className="text-[0.4rem] font-thin mb-1 text-gray-600 uppercase">
                  March 2022 - June 2022
                </div>
                <div className="text-[7.5px] font-[3rem] text-gray-900">
                  I provided support to the farm by performing various tasks.
                  These included vaccinating chickens, conducting treatment
                  procedures, weighing eggs, and diligently inspecting them for
                  any potential deficiencies.
                </div>
              </div> */}
            </div>
          )}

          <div className="font-sans p-2">
            <h2 className="font-semibold text-xs font-mono text-gray-800">
              Education
            </h2>
            <div className="history">
              <div className="font-sans text-[0.5rem] font-semibold my-1">
                Diploma - Animal Health, University of North West
              </div>
              <div className="text-[0.4rem] font-thin mb-1 text-gray-600 uppercase">
                February 2019 - December 2021
              </div>
              <div className="text-[7.5px] font-[3rem] text-gray-900">
                Gained the required foundation in all aspects of animal diseases
                and health, including anatomy and physiology, nutrition,
                pharmacology and toxicology
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#082A4D] w-[34%] text-white px-6 pt-[7rem] rounded-r-md">
          {showSection && (
            <h2 className="font-semibold text-xs font-mono">Details</h2>
          )}
          <div className="font-sans">
            <div className="text-[0.4rem] my-1">{personalDetails?.city}</div>
            <div className="text-[0.4rem] my-1">{personalDetails?.country}</div>
            <div className="text-[0.4rem] my-1">
              {personalDetails?.phoneNumber}
            </div>
            <div className="text-[0.4rem] mb-1 underline">
              {personalDetails?.email}
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-xs font-mono">Skills</h2>
              <div className="text-[0.4rem] my-1">
                Able to Operate Under Pressure
                <div className="w-full p-[0.1rem] mt-[0.1rem] bg-white"></div>
              </div>
              <div className="text-[0.4rem] my-1">
                Effective Time Management
                <div className="w-full p-[0.1rem] mt-[0.1rem] bg-white"></div>
              </div>
              <div className="text-[0.4rem] my-1">
                Team Player
                <div className="w-full p-[0.1rem] mt-[0.1rem] bg-white"></div>
              </div>
              <div className="text-[0.4rem] my-1">
                Adaptablity
                <div className="w-full p-[0.1rem] mt-[0.1rem] bg-white"></div>
              </div>
              <div className="text-[0.4rem] my-1">
                Ability to Multitask
                <div className="w-full p-[0.1rem] mt-[0.1rem] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 px-2 my-3 text-white items-center">
        <Link
          href="/resume/JiGh_31GA20JabpZBfa"
          className="px-10 rounded-md py-3 bg-red-300 hover:bg-red-500 text-sm"
        >
          Preview
        </Link>
        <button className="px-10 rounded-md py-3 bg-green-500 hover:bg-green-300 text-sm">
          Download
        </button>
      </div>
    </div>
  )
}
