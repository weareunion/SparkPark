import {Block} from "baseui/block";
import React, {useContext} from "react";
import {RoutingContext, ThemeContext} from "./Store";
import HeaderNavigation from "./components/headerNavigation";
import BookSpace from "./components/BookSpace";


const RouteWrapper = () => {
    // @ts-ignore
    const [activeRoute, followRoute] = useContext(RoutingContext)
    // @ts-ignore
    const [theme, setTheme] = useContext(ThemeContext)
    console.log("Routing switched: ", activeRoute)
    if (window.history.pushState){
        let newurl = window.location.protocol + "//" + window.location.host + activeRoute.request;
        window.history.pushState({path:newurl},'',newurl);
    }
    return <Block>
        {activeRoute.showNavbar ? <HeaderNavigation setTheme={setTheme}/> : ""}
        {/*<BookSpace/>*/}
        {activeRoute.jsx}
    </Block>
}

export default RouteWrapper;