import { useAuthDataContext } from "../common/AuthDataProvider";

import { signIn } from "next-auth/react"
export default function SigninComponent() {
    const { providers, csrfToken } = useAuthDataContext()
    return (
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-1/2 mx-auto bg-white outline-none focus:outline-none">
            <div className="p-10">
                <h1 className="text-2xl font-semibold">Create an account to save your progress</h1>
                <p className="text-sm  text-gray mt-2">Are you new to FreshResume? <a><span className="text-violet-700 ">Create An Account</span></a></p>


                <div className="mt-5">
                    <form action="/api/auth/callback/credentials" method="POST">
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                        <div className="my-2">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email
                                </span>
                                <input name="username" id="input-username-for-credentials-provider" type="email" placeholder="Enter your Email" label="Email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                            </label>
                        </div>
                        <div className="my-2 ">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Password
                                </span>
                                <input name="password" id="input-password-for-credentials-provider" type="password" placeholder="Create A Strong Password" label="Password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                            </label>
                        </div>




                        <button className="rounded-lg mx-auto bg-indigo-700 w-full mt-3 text-white py-2 " type="submit">Log In</button>
                    </form>

                    {Object.values(providers).map(function (provider) {
                        if (provider.id != 'credentials') {
                            return <div key={provider.name}>
                                <button className="rounded-lg mx-auto bg-black w-full my-2 text-white py-2" onClick={() => signIn(provider.id)}>
                                    {provider.name}
                                </button>
                            </div>
                        }
                        return <span key={provider.name}></span>
                    })}
                    {Object.values(providers).map(function (provider) {
                        if (provider.id != 'credentials') {
                            return <div key={provider.name}>
                                <button className="rounded-lg mx-auto bg-white shadow-xl w-full my-2 text-black py-2" onClick={() => signIn(provider.id)}>

                                    <img className="h-5 mx-auto" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"></img>
                                </button>
                            </div>
                        }
                        return <span key={provider.name}></span>
                    })}
                </div>
            </div>
        </div>
    )
}

