import { getProviders, signIn, getCsrfToken } from "next-auth/react"

export default function SignIn({ providers, csrfToken }) {
    return (
        <>
            {Object.values(providers).map(function (provider) {
                if (provider.id != 'credentials') {
                    return <div key={provider.name}>
                        <button className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4" onClick={() => signIn(provider.id)}>
                            {provider.name}
                        </button>
                    </div>
                }
                return <span key={provider.name}></span>
            })}

            <div className="mt-5">


                <form action="/api/auth/callback/credentials" method="POST">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <div>
                        <label className="section-header" htmlFor="input-username-for-credentials-provider">Email</label>
                        <input name="username" id="input-username-for-credentials-provider" type="email" placeholder="Enter your Email" label="Email" />
                    </div>
                    <div>
                        <label className="section-header" htmlFor="input-password-for-credentials-provider">Password</label>
                        <input name="password" id="input-password-for-credentials-provider" type="password" placeholder="" label="Password" />
                    </div>
                    <button type="submit">Sign in with SignIn With Credentials</button></form>

            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)
    return {
        props: { providers, csrfToken },
    }
}