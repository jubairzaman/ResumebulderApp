
import { useEffect, useState } from "react"
import { getProviders, signIn, getCsrfToken } from "next-auth/react"
export default function SigninComponent() {
    const [providers, setProviders] = useState([])
    const [csrfToken, setcsrfToken] = useState("")

    useEffect(() => {
        const setAuthData = async () => {
            const providers = await getProviders()
            const csrfToken = await getCsrfToken()
            setProviders(providers);
            setcsrfToken(csrfToken);
        }
        setAuthData();
    }, []);

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
                        <div className="flex justify-between mb-2">
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800" >
                                    Remember Password
                                </label>
                            </div>
                            <div>
                                <a><span className="text-violet-700 ">Create An Account</span></a>
                            </div>


                        </div>

                        <button className="rounded-lg mx-auto bg-indigo-700 w-full mt-3 text-white py-2 " type="submit">Log In</button>

                    </form>

                    {Object.values(providers).map(function (provider) {
                        if (provider.id != 'credentials') {
                            return <div key={provider.name}>
                                <button className="rounded-lg mx-auto bg-black w-full my-2 text-white py-2" onClick={() => signIn(provider.id, {
                                    callbackUrl: `${window.location.origin}/dashboard`,
                                })}>
                                    {provider.name}
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

