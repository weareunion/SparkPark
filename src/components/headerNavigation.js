import * as React from "react";
import {useContext} from "react";
import {ALIGN, HeaderNavigation, StyledNavigationItem, StyledNavigationList} from "baseui/header-navigation";
import {Button, SHAPE, SIZE} from "baseui/button";
import {IoFlash} from "react-icons/io5";
import {Block} from "baseui/block";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {KIND} from "baseui/tag";
import {HeadingLarge, HeadingSmall, ParagraphMedium, ParagraphSmall} from "baseui/typography";
import {DarkTheme} from "baseui";
import {Drawer} from "baseui/drawer";
import {Navigation} from "baseui/side-navigation";
import {FiLogIn} from "react-icons/fi";
import {MdLocationPin, MdPayments} from "react-icons/md";
import {AiFillCar} from "react-icons/ai";
import IconedText from "./IconedText";
import {RiMoneyDollarBoxFill, RiReservedFill, RiUser4Fill} from "react-icons/ri";
import {AuthenticationContext, SignInContext} from "../Store";


export default (props) => {

    const AuthContextState = useContext(AuthenticationContext)
    const SignInModalState = React.useContext(SignInContext);
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeItemId, setActiveItemId] = React.useState(
        "#primary"
    );

    let menuItems = [{
        title: "For Providers",
        itemId: "#providers",
    },
        {
            title: "About SparkPark",
            itemId: "#about",
        },
        {
            title: "Contact Us",
            itemId: "#support",
        }]

    if (AuthContextState[0] !== undefined){
        let i = {
            title:  <IconedText icon={<RiUser4Fill/>}><strong>My Account</strong></IconedText>,
            itemId: "#account",
            subNav: [
                { title: <IconedText icon={<AiFillCar/>}><strong>My Cars</strong></IconedText>, itemId: "#cars" },
                {
                    title: <IconedText icon={<RiMoneyDollarBoxFill/>}><strong>Tickets</strong></IconedText>,
                    itemId: "#tickets",
                },
                {
                    title: <IconedText icon={<RiReservedFill/>}><strong>Reservations</strong></IconedText>,
                    itemId: "#reservations",
                },
                {
                    title: <IconedText icon={<MdPayments/>}><strong>Payments</strong></IconedText>,
                    itemId: "#payments",
                }
            ]
        }
        menuItems = [i, ...menuItems]
    }



    return (
        <>
            <Drawer
                isOpen={isOpen}
                autoFocus
                onClose={() => setIsOpen(false)}
            >
                <Block marginTop="15px">
                    <img src={require('./../assets/img/handpeace.png')} width="50px" alt="Friendly Hands"/>
                </Block>
                <HeadingLarge marginBottom="0px" marginTop="10px"><strong>{AuthContextState[0] !== undefined ? "Welcome Back.": "Hello!"}</strong></HeadingLarge>
                <ParagraphMedium color="primary500" marginTop="0px">Let's get you parked.</ParagraphMedium>
                <Navigation
                    items={menuItems}
                    activeItemId={activeItemId}
                    onChange={({ item }) =>
                        setActiveItemId(item.itemId)
                    }
                />

                <Block marginTop="10px" marginBottom="10px">
                    <Button
                        onClick={() => alert("click")}
                        size={SIZE.default}
                        shape={SHAPE.pill}
                        kind={KIND.minimal}
                        overrides={{
                            BaseButton: {
                                style: ({$theme}) => ({
                                    width: "100%",
                                    backgroundColor: $theme.colors.primary
                                })
                            }
                        }}
                    >
                        <MdLocationPin style={{
                            marginRight: "5px"
                        }}/> Find A Place to Park
                    </Button>
                </Block>
                <Block marginTop="0px" marginBottom="30px">
                    <Button
                        onClick={() => {SignInModalState[1](true)}}
                        size={SIZE.default}
                        shape={SHAPE.pill}
                        kind={KIND.tertiary}
                        overrides={{
                            BaseButton: {
                                style: ({$theme}) => ({
                                    width: "100%",
                                    backgroundColor: $theme.colors.backgroundStateDisabled,
                                    color: $theme.colors.primary
                                })
                            }
                        }}
                    >
                        <FiLogIn style={{
                            marginRight: "10px"
                        }}/>  {AuthContextState[0] !== undefined ? "Sign Out" : "Login and Sign Up"}
                    </Button>
                </Block>
                <Block alignItems={ALIGN.center}>
                    <ParagraphSmall color="primary400"><u>Privacy Policy</u> | <u>Terms of Service</u></ParagraphSmall>
                </Block>

            </Drawer>
        <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left} style={{
                 marginTop: "0px"
            }}>
                <StyledNavigationItem ><Block ><HeadingSmall color="accent" paddingTop="0px" marginTop="15px" marginBottom="15px"><IoFlash/><strong style={{
                    marginLeft: "10px", marginTop: "0px", paddingTop: "0px"
                }}>SparkPark</strong></HeadingSmall></Block></StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <Block paddingRight="15px">
                        <Button onClick={() => {
                            props.setTheme(DarkTheme)
                            setIsOpen(true)
                        }} shape={SHAPE.circle} kind={KIND.tertiary} overrides={{
                            BaseButton: {
                                style: ({$theme}) => ({
                                    backgroundColor: $theme.colors.primaryB
                                })
                            }
                        }}><Block color="primaryA" paddingTop="5px"><HiOutlineMenuAlt4 size="22px"/></Block></Button>
                    </Block>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
            </>
    );
}