import Image from 'next/image'
import PersonalDetails from './components/PersonalDetails'
import EmploymentHistory from './components/EmploymentHistory'

export default function Home() {
  return (
    <main className="flex">
      <div className="flex flex-col w-1/2 min-h-screen p-10">
        <PersonalDetails />
        <EmploymentHistory />
      </div>
      <div className="flex flex-col bg-green-100 w-1/2 min-h-screen p-10">
        two
      </div>
    </main>
  )
}
