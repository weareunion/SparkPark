import React, {useContext} from "react";
import {RoutingContext, ThemeContext} from "./Store";
import BookSpace from "./components/BookSpace";
import {honorDeviceTheme} from "./HonorDeviceTheme";
import HeaderNavigation from "./components/headerNavigation";
import {Error404Page} from "./components/Error404Page";
import HomePage from "./components/HomePage";


let routes = [{
    query: '/locations/:id/park/',
    scope: 'basic',
    jsx: <BookSpace/>,
    showNavbar: true,
    authorizationRequired: false,
},
    {
        query: '/',
        scope: 'basic',
        jsx: <HomePage/>,
        showNavbar: true,
        authorizationRequired: false,
    }
]

let errorPages = {
    404: {
        jsx: <Error404Page/>,
        showNavbar: true,
        authorizationRequired: false,
    }
}
const functions = {
    addRoute: (config: {
        query: string,
        scope: string,
        jsx: JSX.Element,
        showNavbar: boolean,
        authorizationRequired: boolean,
    }) => {
        if (config.query[0] != '/') config.query = '/' + config.query
        if (config.query[config.query.length-1] != '/') config.query += '/'
        routes.push(config)
    },
    getFollowContext: (route:string) => {
        // Ensure all the routes are formatted correctly
        // @ts-ignore
        if (route[0] != '/') route = '/' + route
        if (route[route.length-1] != '/') route += '/'

        //Split on directory
        let routeSplit = route.split('/')

        // Set the default page to 404
        let newActiveRoute:{
            route: string,
            params: any,
            jsx: any,
            showNavbar: boolean,
            authorizationRequired: boolean,
            scope: string,
            request: string

        } = {
            route: route,
            params: {
                none: 'none'
            },
            jsx: errorPages["404"].jsx,
            showNavbar: true,
            authorizationRequired: false,
            scope: 'basic',
            request: route
        }

        // Compare the requested route with all the routes defined
        for (const routeContenderObj of routes) {

            // Explode the contending route
            let routeContenderSplit = routeContenderObj.query.split('/')

            // If the requested route and the contending route are not the same length,
            // they can't be the same route, so continue
            if (routeContenderSplit.length != routeSplit.length) continue;
            let isRoute = true;
            let potentialParams: any = {};

            // Compare every segment of the route
            for (let querySegmentIndex = 0; querySegmentIndex < routeContenderSplit.length; querySegmentIndex++) {
                // Check if the route is a slug
                if (routeContenderSplit[querySegmentIndex][0] === ':'){
                    // If it is, set the potential parameters to the value in the path
                    potentialParams[routeContenderSplit[querySegmentIndex].substring(1)] = routeSplit[querySegmentIndex];
                }else{
                    // If the route is not a slug, compare the given depth. If not the same then this is not the route
                    if (routeContenderSplit[querySegmentIndex] !== routeSplit[querySegmentIndex]) {
                        isRoute = false;
                        break;
                    }
                }

            }

            // if it is the route that we want, we set override the parameters of the 404 page. Otherwise, we just exit
            if (isRoute){
                newActiveRoute.route = routeContenderObj.query
                newActiveRoute.jsx = routeContenderObj.jsx
                newActiveRoute.showNavbar = routeContenderObj.showNavbar
                newActiveRoute.authorizationRequired = routeContenderObj.authorizationRequired
                newActiveRoute.scope = routeContenderObj.scope
                newActiveRoute.params = potentialParams
                newActiveRoute.request = route

            }else{
                console.log("Route not found")
            }
            // if (window.history.pushState) {

            // }

        }
        return(newActiveRoute)
    }

}


export default {routes, functions}