import * as React from "react";

interface Props {
    children?: React.ReactChild,
    color?: string,
    border?: string,
    padding?: number,
    margin?: number
}

export function Box(props: Props) {
    let style = {
        height: "100%",
        width: "100%",
        padding: props.padding,
        margin: props.margin,
        borderStyle: "solid",
        borderColor: props.color || "black",
        borderWidth: props.border || "1px 1px 1px 1px", 
    }
    return <div style={style}>{props.children}</div>;
}
