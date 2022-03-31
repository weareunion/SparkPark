// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';
import {
    HeadingMedium,
    HeadingSmall,
    HeadingXLarge,
    HeadingXSmall,
    HeadingXXLarge,
    ParagraphLarge, ParagraphMedium, ParagraphSmall
} from "baseui/typography";
import {ALIGN, StyledNavigationItem, StyledNavigationList} from "baseui/header-navigation";
import {StyledLink} from "baseui/link";
import {Button, KIND, SHAPE, SIZE} from "baseui/button";
import HeaderNavigation from "./components/headerNavigation";
import {Block} from "baseui/block";
import ViewMap from "./components/viewMap";
import {Alert, ArrowDown, ArrowRight} from "baseui/icon";
import {IoInformationCircle} from "react-icons/io5";
const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
function App() {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <HeaderNavigation/>
                <Block padding="30px" paddingTop="0px" paddingBottom="10px">
                    <HeadingSmall marginBottom="0px">Parking Location</HeadingSmall>
                    <HeadingXLarge marginTop="10px" marginBottom="4px"><strong>Civic Center Parking Deck</strong></HeadingXLarge>
                    <ParagraphSmall marginTop="0px" color="muted"><strong>Lot Code: </strong>JHB-747</ParagraphSmall>
                    <Block marginTop="50px">
                        <ViewMap pinText="You should be here" badgeColor="purple" badgeText="JHB-747" latitude="34.8241533"
                        longitude="-82.386209"/>
                    </Block>
                    </Block>

                    <Block backgroundColor="backgroundSecondary" padding="30px" paddingTop="30px">
                    <strong>
                        <ParagraphMedium marginBottom="0px" color="accent400" ><IoInformationCircle size="32px"/></ParagraphMedium>
                    <HeadingSmall  marginBottom="0px" paddingTop="0px" marginTop="0px"><strong>Is this the right parking
                        location?</strong></HeadingSmall></strong>
                    <ParagraphMedium marginTop="0px">We don't want you to pay for the wrong spot</ParagraphMedium>
                    <Button
                        onClick={() => alert("click")}
                        size={SIZE.default}
                        shape={SHAPE.pill}

                        overrides={{
                            BaseButton: {
                                style: ({$theme}) => ({
                                    width: "100%",
                                    backgroundColor: $theme.colors.accent
                                })
                            }
                        }}
                    >
                        Yep! Looks Right.
                    </Button>
                    <Block marginTop="10px">
                        <Button
                            onClick={() => alert("click")}
                            size={SIZE.default}
                            shape={SHAPE.pill}
                            kind={KIND.minimal}
                            overrides={{
                                BaseButton: {
                                    style: ({$theme}) => ({
                                        width: "100%",
                                        backgroundColor: $theme.colors.backgroundTertiary
                                    })
                                }
                            }}
                        >
                            Nope. I need to update my location
                        </Button>
                    </Block>
                </Block>

            </BaseProvider>
        </StyletronProvider>
    );

}

export default App;
