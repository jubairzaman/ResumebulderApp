import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

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
      <Link href="/auth/signin">
        <a className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">SignIn</a>
      </Link>

    </>
  )
}