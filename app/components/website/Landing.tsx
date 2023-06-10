import Image from 'next/image'
import React from 'react'

export default function Landing() {
  return (
    <>
      <div className="h-screen bg-gray-100 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mx-auto text-center leading-[65px] pt-24 max-w-3xl">
            Only 2% of resumes make it past the first round. Be in the top 2%
          </h1>
          <div className="max-w-2xl text-center mx-auto text-2xl mt-4 text-gray-700">
            Use professional field-tested resume templates that follow the exact
            ‘resume rules’ employers look for. Easy to use and done within
            minutes - try now for free!
          </div>
          <div className="bg-black text-white cursor-pointer py-5 px-14 w-fit mx-auto my-6">
            Create My Resume
          </div>
          <div className="max-w-3xl mx-auto mt-10 overflow-hidden">
            <Image
              alt="Picture of Resume"
              src="/res.svg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="bg-black px-10 h-[500px] text-white">
        <div className="max-w-3xl mx-auto pt-20 flex justify-center">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold mt-10 text-left">
              Create a professional story in minutes. Use our cover letter
              maker.
            </h2>
          </div>
          <div className="w-1/2">
            <div className="mx-auto mt-10 overflow-hidden">
              <Image
                alt="Picture of Cover Letter"
                src="/letter.svg"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
