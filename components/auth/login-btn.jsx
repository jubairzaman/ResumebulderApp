import { useSession, signOut } from "next-auth/react"
import AuthModal from "../authModal"
import Singupmodal from "../singupmodal"
import Link from 'next/link';



export default function LoginBtn() {
  const { data: session, status } = useSession()


  if (session) {
    return (
      <>
        <div className="mx-2 my-1">
          {session.user.name}
        </div>

        <button className="text-gray-800 text-sm font-semibold text-purple-600 mr-4 mt-1" onClick={() => signOut()}>Sign out</button>

        <Link href={'/dashboard'}>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Dashboard
        </button>
        </Link>
      </>
    )
  }
  return (
    <>
      <AuthModal></AuthModal>
      <Singupmodal></Singupmodal>
    </>
  )
}