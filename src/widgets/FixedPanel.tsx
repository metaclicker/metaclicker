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
    var panelStyle: React.CSSProperties = {
        width: props.width || "auto",
        height: props.height || "auto",
        position: "absolute", 
        top: props.y,
    } 

    if (props.position == "left") {
        panelStyle.left = props.x;
    } else {
        panelStyle.right = props.x;
    }

    return <div style={panelStyle}>
        {props.children}
    </div>;
}
