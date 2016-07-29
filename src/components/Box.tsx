import * as React from "react";

export function Box(props: {children?: React.ReactChild}) {
    let boxStyle : React.CSSProperties = {
        border: "1px solid green",
        padding: 5,
        fontFamily: "Verdana",
        fontSize: 18
    }

    return <div style={boxStyle}>{props.children}</div>;
}
