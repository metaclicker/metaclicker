import * as React from "react";

interface Props {
    children?: React.ReactChild,
    position: "left" | "right"
    x?: number,
    y?: number,
    width?: string,
    height?: string
}

export function FixedPanel(props: Props) {
    var containerStyle: React.CSSProperties = {
        position: "absolute", 
        width: props.width || "auto",
        height: props.height || "auto",
        top: props.y,
    } 

    if (props.position == "left") {
        containerStyle.left = props.x;
    } else {
        containerStyle.right = props.x;
    }

    return <div style={containerStyle}>
        {props.children}
    </div>;
}
