import { useSession, signIn, signOut } from "next-auth/react"
import AuthModal from "../Authmodal"



export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <AuthModal></AuthModal>

    </>
  )
}