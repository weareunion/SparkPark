import React, {useEffect, useState} from "react";
import {LightTheme} from "baseui";
import Routes from "./routes"


export const ThemeContext = React.createContext(undefined);
export const AuthenticationContext = React.createContext(undefined)
export const SignInContext = React.createContext(undefined)
export const RoutingContext = React.createContext(undefined)


// @ts-ignore
const Store = ({children}) => {
    const [themeVariant, setThemeVariant] = useState(LightTheme)
    const [authedUser, setAuthedUser] = useState(undefined)
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [activeRoute, followRoute] = useState((Routes.functions.getFollowContext(window.location.pathname)))

    // useEffect(() => {}, [])


    return (
        <>
            <AuthenticationContext.Provider value={[authedUser, setAuthedUser]}>
            <ThemeContext.Provider value={[themeVariant, setThemeVariant]}>
                <SignInContext.Provider value={[showSignInModal, setShowSignInModal]}>
                    <RoutingContext.Provider value={[activeRoute, followRoute]}>
                        {children}
                    </RoutingContext.Provider>
                </SignInContext.Provider>
            </ThemeContext.Provider>
            </AuthenticationContext.Provider>

        </>
    )
}

export default Store