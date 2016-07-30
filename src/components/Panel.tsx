import * as React from "react";

interface Props {
    children?: React.ReactChild
    width?: string,
    height?: string
}

export function Panel(props: Props) {
    let containerStyle = {
        position: "relative",
        width: props.width || "100%",
        height: props.height || "100%"
    };

    return <div style={containerStyle}>
        {props.children} 
    </div>;
}
