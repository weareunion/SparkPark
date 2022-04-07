import {Block} from "baseui/block";
import {KIND as KINDTAG, SIZE as SIZETAG, Tag, VARIANT} from "baseui/tag";
import React from "react";

export function BookingSteps(props: {
    step: {
        content: any,
        number: number,
        name: string
    }
}) {
    return <Block backgroundColor="backgroundSecondary" padding="30px" paddingTop="30px">

        <Tag
            closeable={false}
            kind={KINDTAG.warning}
            variant={VARIANT.solid}
            size={SIZETAG.small}
            overrides={{
                Root: {
                    style: {
                        margin: "0px",
                        marginLeft: "0px"
                    }
                }
            }}
        >
            <strong>Step {props.step.number} - {props.step.name}</strong>
        </Tag>
        {props.step.content}
    </Block>

}