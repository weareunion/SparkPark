import React, {useState} from "react";
import {LightTheme} from "baseui";

export const ThemeContext = React.createContext(undefined);

// @ts-ignore
const Store = ({children}) => {
    const [themeVariant, setThemeVariant] = useState(LightTheme)

    return (
        <>
            <ThemeContext.Provider value={[themeVariant, setThemeVariant]}>
                {children}
            </ThemeContext.Provider></>
    )
}

export default Store