import {DarkTheme, LightTheme} from "baseui";

export function honorDeviceTheme(setTheme) {
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