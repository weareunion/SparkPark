// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, LightTheme, styled} from 'baseui';
import {HeadingMedium, ParagraphMedium, ParagraphSmall} from "baseui/typography";
import {Button, KIND, SHAPE, SIZE} from "baseui/button";
import HeaderNavigation from "./components/headerNavigation";
import {Block} from "baseui/block";
import ViewMap from "./components/viewMap";
import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {ParkingLocationHeading} from "./components/ParkingLocationHeading";
import {BookingSteps} from "./components/BookingSteps";
import {LoginForm} from "./components/LoginForm";
import Store from "./Store";
import AppContextualized from "./AppContextualized";

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {

    const [themeVariant, setThemeVariant] = useState(LightTheme)

    return (
        <StyletronProvider value={engine}>
            <Store>
                <AppContextualized/>
            </Store>
        </StyletronProvider>
    );

}

export default App;
