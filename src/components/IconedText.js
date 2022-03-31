import {AiFillCar} from "react-icons/ai";
import {Block} from "baseui/block";
import * as React from "react";

const IconedText = (props) => {
    return (
        <Block><span style={{
            display: "flex",
            alignItems: "center"
        }}>{props.iconLast === undefined ? props.icon : <></>}<span style={{
    marginLeft: (props.margin === undefined ? (props.iconLast === undefined ? "10px" : "0px") : (props.iconLast === undefined ? props.margin : "0px")),
    marginRight: (props.margin === undefined ? (props.iconLast !== undefined ? "10px" : "0px") : (props.iconLast !== undefined ? props.margin : "0px"))
        }}> {props.children} </span>{props.iconLast !== undefined ? props.icon : <></>}</span></Block>
    )
}

export default IconedText