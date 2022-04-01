import React, {useState} from "react";
import {LightTheme} from "baseui";

export const ThemeContext = React.createContext(undefined);
export const AuthenticationContext = React.createContext(undefined)
export const SignInContext = React.createContext(undefined)

// @ts-ignore
const Store = ({children}) => {
    const [themeVariant, setThemeVariant] = useState(LightTheme)
    const [authedUser, setAuthedUser] = useState(undefined)
    const [showSignInModal, setShowSignInModal] = useState(false)

    return (
        <>
            <AuthenticationContext.Provider value={[authedUser, setAuthedUser]}>
            <ThemeContext.Provider value={[themeVariant, setThemeVariant]}>
                <SignInContext.Provider value={[showSignInModal, setShowSignInModal]}>
                    {children}
                </SignInContext.Provider>
            </ThemeContext.Provider>
            </AuthenticationContext.Provider>

        </>
    )
}

export default Store