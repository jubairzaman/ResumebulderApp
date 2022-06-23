import { createContext, useContext } from 'react'

// Create Context object.
const AuthDataContext = createContext()

// Export Provider.
export function AuthDataProvider(props) {
	const {providers,token, children} = props
	
	return (
	   <AuthDataContext.Provider value={{providers:providers, csrfToken:token}}>
		{children}
	   </AuthDataContext.Provider>
	)
}

// Export useContext Hook.
export function useAuthDataContext() {
	return useContext(AuthDataContext);
}

