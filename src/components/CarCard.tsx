import {Card, StyledAction, StyledBody} from "baseui/card";
import {HeadingMedium} from "baseui/typography";
import {ListItem, ListItemLabel} from "baseui/list";
import {Button, SHAPE} from "baseui/button";
import React from "react";
import {Block} from "baseui/block";

// @ts-ignore
export function CarCard(props: { id: string,name:string, artwork: (props: JSX.IntrinsicAttributes) => JSX.Element, endEnhancer: () => JSX.Element, artwork1: (props: JSX.IntrinsicAttributes) => JSX.Element, endEnhancer1: () => JSX.Element, artwork2: (props: JSX.IntrinsicAttributes) => JSX.Element, endEnhancer2: () => JSX.Element, artwork3: (props: JSX.IntrinsicAttributes) => JSX.Element, endEnhancer3: () => JSX.Element
    selectionFunction(id: string): any;
}) {
    return <Block marginTop="10px"><Card>
        <StyledBody>
            <HeadingMedium marginTop="15px" marginBottom="0px"><strong>{props.name}</strong></HeadingMedium>

            <img src={require("./../assets/img/purple_porsche.webp")} width="100%"/>
            <ListItem
                artwork={props.artwork}
                endEnhancer={props.endEnhancer}
            >
                <ListItemLabel>Year</ListItemLabel>
            </ListItem>
            <ListItem
                artwork={props.artwork1}
                endEnhancer={props.endEnhancer1}
            >
                <ListItemLabel>Make</ListItemLabel>
            </ListItem>
            <ListItem
                artwork={props.artwork2}
                endEnhancer={props.endEnhancer2}
            >
                <ListItemLabel>Model</ListItemLabel>
            </ListItem>
            <ListItem
                artwork={props.artwork3}
                endEnhancer={props.endEnhancer3}
            >
                <ListItemLabel>Licence Plate</ListItemLabel>
            </ListItem>
        </StyledBody>
        <StyledAction>
            <Button
                shape={SHAPE.pill}
                overrides={{
                    BaseButton: {style: {width: "100%"}}
                }}
                onClick={() => {props.selectionFunction(props.id)}}
            >
                I am parking this car
            </Button>
        </StyledAction>
    </Card></Block>;
}