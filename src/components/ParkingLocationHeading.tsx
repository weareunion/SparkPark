import {useSnackbar} from "baseui/snackbar";
import {Block} from "baseui/block";
import {Button, KIND, SHAPE, SIZE} from "baseui/button";
import {Alert, ArrowLeft} from "baseui/icon";
import {HeadingLarge, HeadingMedium, HeadingXLarge, HeadingXSmall, ParagraphSmall} from "baseui/typography";
import {FaParking} from "react-icons/fa";
import {MdLocationPin, MdOutlineQrCode} from "react-icons/md";
import React, {useContext} from "react";
import IconedText from "./IconedText";
import {RoutingContext} from "../Store";

export function ParkingLocationHeading(props: {
    compact: boolean,
    back: boolean,
    backFunc?: () => void
}) {
    // @ts-ignore
    const [activeRoute, followRoute] = useContext(RoutingContext)
    const {enqueue} = useSnackbar();
    return <Block backgroundColor="background" padding="30px"
                  paddingTop={props.compact ? (props.back ? "20px" : "30px") : "40px"}
                  paddingBottom={props.compact ? "20px" : "30px"}>
        {props.back ?
            <Button
                onClick={() => {
                    props.backFunc !== undefined ? props.backFunc() : enqueue({
                        message: 'We can\'t go back at this time',
                        startEnhancer: ({size}) => <Alert size={size}/>,
                    })
                }}
                startEnhancer={<ArrowLeft/>}
                kind={KIND.secondary}
                size={SIZE.compact}
                shape={SHAPE.pill}
            >
                Back
            </Button>
            : <></>}
        <HeadingLarge marginBottom="0px" margin="0px" paddingTop={props.back ? "20px" : "0px"} color="accent"><FaParking
            size={props.compact ? "25px" : "40px"}/></HeadingLarge>
        {props.compact ?
            <ParagraphSmall marginBottom="0px" marginTop={props.compact ? "0px" : "15px"} color="primary500"
                            paddingBottom="0px"><strong>Parking
                Location</strong></ParagraphSmall>
            : <HeadingXSmall marginBottom="0px" marginTop={props.compact ? "0px" : "15px"} color="primary500"
                             paddingBottom="0px">Parking
                Location</HeadingXSmall>
        }
        {props.compact ?
            <HeadingMedium marginTop="0px" marginBottom="4px"><strong>Civic Center Parking Deck</strong></HeadingMedium>
            : <HeadingXLarge marginTop="0px" marginBottom="4px"><strong>Civic Center Parking
                Deck</strong></HeadingXLarge>}
        <Block color="primary500">
            {props.compact ?
                "" :
                <ParagraphSmall marginTop="20px" marginBottom="5px" color="muted">
                <IconedText icon={<MdOutlineQrCode/>} margin="5px">
                    <strong>Lot Code: </strong>{activeRoute.params.id}
                </IconedText>
                </ParagraphSmall>
            }
            <ParagraphSmall marginTop={props.compact ? "5px" : "0px"} color="muted">
            <IconedText margin="5px" icon={<MdLocationPin/>}>
                106 Carmaddon St. Asheville, NC 39234
            </IconedText>
            </ParagraphSmall>

        </Block>

    </Block>;
}