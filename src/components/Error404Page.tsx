import {Block} from "baseui/block";
import {
    Display3,
    DisplayLarge,
    DisplayMedium,
    MonoDisplaySmall,
    MonoHeadingSmall, MonoLabelMedium, MonoLabelXSmall,
    ParagraphMedium
} from "baseui/typography";
import {FaSadTear} from "react-icons/fa";
import {Button, SHAPE, SIZE} from "baseui/button";
import {ArrowLeft} from "baseui/icon";
import IconedText from "./IconedText";
import {useContext} from "react";
import {RoutingContext} from "../Store";
import Routes from "../routes";

export function Error404Page() {
    // @ts-ignore
    const [activeRoute, followRoute] = useContext(RoutingContext)

    return <Block $style={{
        textAlign: "center"
    }} marginTop="90px">
        <DisplayLarge color="warning"><FaSadTear></FaSadTear></DisplayLarge>
        <DisplayMedium $style={{
            textAlign: "center"
        }} marginBottom="0px">
            <strong style={{
            textAlign: "center"
        }}>We might need to re-plan this trip.</strong></DisplayMedium>
        <ParagraphMedium marginTop="1px" marginBottom="40px" color="primary300" >You have found yourself on a page that does not exist.</ParagraphMedium>

        <Button
            onClick={() => {
                console.log(Routes.functions.getFollowContext('/'))
                followRoute((Routes.functions.getFollowContext('/')))
            }}
            size={SIZE.large}
            shape={SHAPE.pill}
        >
            <IconedText icon={<ArrowLeft/>}>Back to safety (our homepage)</IconedText>
        </Button>
        <MonoLabelXSmall color="warning600" marginTop="60px">Error 404</MonoLabelXSmall>

    </Block>
}