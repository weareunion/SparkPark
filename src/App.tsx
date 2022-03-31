// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';
import {
    HeadingLarge,
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
import {FaParking} from "react-icons/fa";
import {Tag, VARIANT, SIZE as SIZETAG, KIND as KINDTAG} from "baseui/tag";
import {GrLocationPin} from "react-icons/gr";
import {MdLocationPin, MdOutlineQrCode} from "react-icons/md";
import {HiOutlineIdentification} from "react-icons/hi";
import {BsFillArrowDownRightSquareFill} from "react-icons/bs";
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
                <Block padding="30px" paddingTop="40px" paddingBottom="30px">
                    <HeadingLarge marginBottom="0px" margin="0px" color="accent"><FaParking size="40px"/></HeadingLarge>
                    <HeadingXSmall marginBottom="0px" marginTop="15px" color="primary500" paddingBottom="0px">Parking Location</HeadingXSmall>
                    <HeadingXLarge marginTop="0px" marginBottom="4px"><strong>Civic Center Parking Deck</strong></HeadingXLarge>
                    <Block color="primary500">
                    <ParagraphSmall marginTop="20px" marginBottom="5px" color="muted"><strong><MdOutlineQrCode/> </strong><strong>Lot Code: </strong>JHB-747</ParagraphSmall>
                    <ParagraphSmall marginTop="0px" color="muted"><strong><MdLocationPin/> </strong><strong>Address: </strong>106 Carmaddon St. Asheville, NC 39234</ParagraphSmall>
                    </Block>

                    </Block>

                    <Block backgroundColor="backgroundSecondary" padding="30px" paddingTop="30px">

                        <Tag

                            closeable={false}
                            kind={KINDTAG.warning}
                            variant={VARIANT.solid}
                            size={SIZETAG.medium}
                            overrides={{
                                Root: {
                                    style: {
                                        margin: "0px",
                                        marginLeft: "0px"
                                    }
                                }
                            }}
                        >
                            Step 1 - Verify
                        </Tag>
                        <strong>

                    <HeadingMedium  marginBottom="0px" paddingTop="15px" marginTop="0px"><strong>Is this the right parking
                        location?</strong></HeadingMedium></strong>
                    <ParagraphMedium marginTop="0px">We don't want you to pay for the wrong spot</ParagraphMedium>
                        <Block marginTop="30px">
                            <ViewMap pinText="You should be here" badgeColor="purple" badgeText="JHB-747" latitude="34.8241533"
                                     longitude="-82.386209"/>
                        </Block>
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
                    <Block marginTop="10px" marginBottom="30px">
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
