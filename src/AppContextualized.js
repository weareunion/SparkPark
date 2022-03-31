import HeaderNavigation from "./components/headerNavigation";
import {BaseProvider, DarkTheme, LightTheme} from "baseui";
import React, {useContext} from "react";
import {ThemeContext} from "./Store";
import BookSpace from "./components/BookSpace";


function honorDeviceTheme(setTheme) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    function changeTheme() {
        if (darkThemeMq.matches) {
            setTheme(DarkTheme)
        } else {
            setTheme(LightTheme)
        }
    }

    darkThemeMq.addListener(e => {
        changeTheme();
    });

    changeTheme()
}

const AppContextualized = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    honorDeviceTheme(setTheme);

    return (
      <BaseProvider theme={theme}>
          <HeaderNavigation setTheme={setTheme}/>
          <BookSpace theme={theme}/>
      </BaseProvider>
  )
}

export default AppContextualized