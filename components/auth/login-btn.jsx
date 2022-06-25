import { useSession, signOut } from "next-auth/react"
import AuthModal from "../authModal"
import Singupmodal from "../singupmodal"



export default function LoginBtn() {
  const { data: session, status } = useSession()


  if (session) {
    return (
      <>
       {session.user.name}
        <button className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4" onClick={() => signOut()}>Sign out</button>
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