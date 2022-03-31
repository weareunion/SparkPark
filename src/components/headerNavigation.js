import * as React from "react";
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import {Button, SHAPE} from "baseui/button";
import {IoFlash, IoMenu, IoPerson} from "react-icons/io5";
import {Block} from "baseui/block";
import {HiMenu, HiMenuAlt1, HiMenuAlt2, HiOutlineMenuAlt1, HiOutlineMenuAlt2, HiOutlineMenuAlt4} from "react-icons/hi";
import {KIND} from "baseui/tag";
import {DisplayXSmall, HeadingSmall} from "baseui/typography";
import {DarkTheme} from "baseui";

export default (props) => {
    return (
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
    );
}