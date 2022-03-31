import * as React from "react";
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import {Button, SHAPE, SIZE} from "baseui/button";
import {IoFlash, IoMenu, IoPerson} from "react-icons/io5";
import {Block} from "baseui/block";
import {HiMenu, HiMenuAlt1, HiMenuAlt2, HiOutlineMenuAlt1, HiOutlineMenuAlt2, HiOutlineMenuAlt4} from "react-icons/hi";
import {KIND} from "baseui/tag";
import {
    DisplayXSmall,
    HeadingLarge,
    HeadingSmall,
    HeadingXSmall,
    ParagraphMedium,
    ParagraphSmall
} from "baseui/typography";
import {DarkTheme, LightTheme} from "baseui";
import {Drawer} from "baseui/drawer";
import {Checkbox, LABEL_PLACEMENT, STYLE_TYPE} from "baseui/checkbox";
import {BsMoonFill} from "react-icons/bs";
import {Navigation} from "baseui/side-navigation";
import {FiLogIn} from "react-icons/fi";
import {MdLocationPin, MdPayments} from "react-icons/md";
import {AiFillCar} from "react-icons/ai";
import IconedText from "./IconedText";
import {RiMoneyDollarBoxFill, RiReservedFill, RiUser4Fill} from "react-icons/ri";


export default (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [activeItemId, setActiveItemId] = React.useState(
        "#primary"
    );

    return (
        <>
            <Drawer
                isOpen={isOpen}
                autoFocus
                onClose={() => setIsOpen(false)}
            >
                <Block marginTop="15px">
                    <img src={require('./../assets/img/handpeace.png')} width="50px" />
                </Block>
                <HeadingLarge marginBottom="0px" marginTop="10px"><strong>Welcome Back.</strong></HeadingLarge>
                <ParagraphMedium color="primary500" marginTop="0px">Let's get you parked.</ParagraphMedium>
                <Navigation
                    items={[
                        {
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
                        },
                        {
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
                        }
                    ]}
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
                        onClick={() => alert("click")}
                        size={SIZE.default}
                        shape={SHAPE.pill}
                        kind={KIND.tertiary}
                        overrides={{
                            BaseButton: {
                                style: ({$theme}) => ({
                                    width: "100%",
                                    backgroundColor: $theme.colors.primary700,
                                    color: $theme.colors.primary
                                })
                            }
                        }}
                    >
                        <FiLogIn style={{
                            marginRight: "10px"
                        }}/>  Login and Sign Up
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