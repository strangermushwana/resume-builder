'use client'

import PersonalDetails from './components/PersonalDetails'
import EmploymentHistory from './components/EmploymentHistory'
import Education from './components/Education'
import Resume from './components/Resume'
import React from 'react'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="flex flex-col w-1/2 overflow-y-auto">
        <div className="flex-1 p-12">
          <PersonalDetails />
          <EmploymentHistory />
          <Education />
          <Skills />
        </div>
      </div>
      <div className="bg-gray-500 w-1/2">
        <Resume />
      </div>
    </main>
  )
}
