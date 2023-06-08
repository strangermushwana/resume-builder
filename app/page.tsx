import PersonalDetails from './components/PersonalDetails'
import EmploymentHistory from './components/EmploymentHistory'
import Education from './components/Education'

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="flex flex-col w-1/2 overflow-y-auto">
        <div className="flex-1 p-12">
          <PersonalDetails />
          <EmploymentHistory />
          <Education />
        </div>
      </div>
      <div className="bg-gray-800 w-1/2">
        <div className="h-full p-10">two</div>
      </div>
    </main>
  )
}
