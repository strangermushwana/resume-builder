import Image from 'next/image'
import PersonalDetails from './components/PersonalDetails'

export default function Home() {
  return (
    <main className="flex">
      <PersonalDetails />
      <div className="flex flex-col bg-green-100 w-1/2 min-h-screen p-10">
        two
      </div>
    </main>
  )
}
