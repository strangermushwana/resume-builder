import React, { useEffect, useReducer, useState } from 'react'
import UpArrow from './UI/UpArrow'
import DownArrow from './UI/DownArrow'
import { INITIAL_STATE, collapsableReducer } from '../state/CollapsableReducer'
import {
  EDUCATION_INITIAL_STATE,
  educationReducer,
} from '../state/EducationReducer'

export default function Education() {
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: '',
      qualification: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
    },
  ])

  const [educationCollapse, dispatch] = useReducer(
    collapsableReducer,
    INITIAL_STATE
  )

  const [educationUpdate, educationUpdateDispatch] = useReducer(
    educationReducer,
    EDUCATION_INITIAL_STATE
  )

  const handleEducationChange = (
    index: number,
    e: { target: { name: any; value: any } }
  ) => {
    educationUpdateDispatch({
      type: 'UPDATE_EDUCATION',
      payload: {
        index,
        newValue: { [e.target.name]: e.target.value },
      },
    })
    setEducation((data: any) => {
      const selected = data[index]
      let temp = [...data]
      temp[index] = { ...selected, [e.target.name]: e.target.value }
      return temp
    })
  }

  const deleteEducation = (index: number) => {
    setEducation(() => [...education].filter((ed, i) => index !== i))
  }

  const addEducation = () => {
    setEducation((data) => [
      ...data,
      {
        id: crypto.randomUUID(),
        school: '',
        qualification: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      },
    ])
    dispatch({
      type: 'COLLAPSE',
      payload: {
        collapsed: true,
        currentIndex: education.length,
      },
    })
  }

  const toggleEducation = (index: number) => {
    dispatch({
      type: 'COLLAPSE',
      payload: {
        collapsed:
          index === educationCollapse.currentIndex
            ? !educationCollapse.collapsed
            : true,
        currentIndex: index,
      },
    })
  }

  const setHeader = (index: number): string => {
    const currentEducation = education[index]
    return currentEducation?.qualification && currentEducation?.school
      ? `${currentEducation.school} at ${currentEducation?.qualification}`
      : currentEducation?.school ||
          currentEducation?.qualification ||
          '(Not specified)'
  }

  useEffect(() => {})

  return (
    <div className="flex flex-col mt-4">
      <h2 className="text-2xl font-bold p-1">Education</h2>
      <label className="block mb-2 text-sm p-1 font-sm text-gray-600">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </label>
      {education.map((edu, index) => (
        <div key={edu.id}>
          {
            <div className="flex items-center">
              <div className="p-3 mt-2 shadow-md w-full border-t rounded-md">
                <div
                  onClick={() => toggleEducation(index)}
                  className="group py-2 cursor-pointer"
                >
                  <div className="flex items-center mx-auto group-hover:text-yellow-900 w-full justify-between">
                    <div className="left">
                      <div className="text-[0.8rem] group-hover:text-yellow-700 font-semibold pl-2 text-gray-900">
                        {setHeader(index)}
                      </div>
                      <div className="text-[0.8rem] pl-2 my-1 text-gray-400">
                        May 2020 - June 2020
                      </div>
                    </div>
                    <div className="pr-2 pb-1">
                      {' '}
                      {educationCollapse?.collapsed &&
                      educationCollapse?.currentIndex === index ? (
                        <UpArrow />
                      ) : (
                        <DownArrow />
                      )}
                    </div>
                  </div>
                </div>
                {educationCollapse?.collapsed &&
                  educationCollapse?.currentIndex === index && (
                    <div>
                      <div className="flex">
                        <div className="p-2 w-1/2">
                          <div className="p-1">
                            <label className="block mb-2 text-sm font-md text-gray-500">
                              School
                            </label>
                            <input
                              name="school"
                              onChange={(e) => handleEducationChange(index, e)}
                              type="text"
                              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                              placeholder="e.g. University of Mars"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-1/2">
                          <div className="p-1">
                            <label className="block mb-2 text-sm font-md text-gray-500">
                              Degree
                            </label>
                            <input
                              name="qualification"
                              onChange={(e) => handleEducationChange(index, e)}
                              type="text"
                              className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                              placeholder="Bsc. Space Science"
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
                                name="startDate"
                                onChange={(e) =>
                                  handleEducationChange(index, e)
                                }
                                type="text"
                                className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                                placeholder="MM/YYYY"
                              />
                            </div>
                            <div className="w-1/2">
                              <input
                                name="endDate"
                                onChange={(e) =>
                                  handleEducationChange(index, e)
                                }
                                type="text"
                                className="text-black bg-gray-100 text-sm outline-none focus:border-b-2 block w-full p-3"
                                placeholder="MM/YYYY"
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
                              name="city"
                              onChange={(e) => handleEducationChange(index, e)}
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
                              name="description"
                              onChange={(e) => handleEducationChange(index, e)}
                              style={{ resize: 'none' }}
                              rows={10}
                              className="block p-3 w-full text-sm text-gray-900 bg-gray-100 outline-none focus:border-b-2"
                              placeholder="e.g. Graduated under 30 seconds..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
              <div
                className="w-[1%] pl-2 ml-auto cursor-pointer"
                onClick={() => deleteEducation(index)}
              >
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
          }
        </div>
      ))}
      <div
        onClick={addEducation}
        className="text-[0.8rem] cursor-pointer hover:bg-red-50 font-semibold p-2 mt-3 text-yellow-900"
      >
        <span className="mr-1">+</span>Add One More Education
      </div>
    </div>
  )
}
