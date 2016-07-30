import * as React from "react";

interface Props {
    children?: React.ReactChild,
    x: number,
    y: number,
    position: "left" | "right"
}

export function FixedPanel(props: Props) {
    var style: React.CSSProperties 
    if (props.position == "left") {
        style = {position: "absolute", top: props.y, left: props.x};
    } else {
        style = {position: "absolute", top: props.y, right: props.x};
    }

    return <div style={style}>
        {props.children}
    </div>;
}
