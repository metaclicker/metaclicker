import * as React from "react";

interface Props {
    children?: React.ReactChild,
    width?: string,
    height?: string,
    margin?: number | string
    padding?: number | string,
    color?: string,
    border?: string,
}

export function BorderPanel(props: Props) {
    let panelStyle = {
        width: props.width || "100%",
        height: props.height || "100%",
        padding: props.padding,
        margin: props.margin,
        borderStyle: "solid",
        borderColor: props.color || "black",
        borderWidth: props.border || "1px 1px 1px 1px", 
    }
    return <div style={panelStyle}>{props.children}</div>;
}
