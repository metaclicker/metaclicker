import * as React from "react";

interface Props {
    children?: React.ReactChild
    direction?: "column" | "row",
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around",
    align?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline",
    flex?: number | string,
    width?: number | string,
    height?: number | string
}

export function FlexPanel(props: Props) {
    let containerStyle = {
        position: "relative",
        display: "flex",
        flexDirection: props.direction || "column",
        justifyContent: props.justify || "flex-start",
        alignItems: props.align || "stretch", 
        width: props.width || "100%",
        height: props.height || "100%"};
    return <div style={containerStyle}>
        {React.Children.map(props.children, (c) => {
            if (props.flex) { 
                return <div style={{flex: props.flex}}>{c}</div>;
            } else {
                return c;
            }
        })} 
    </div>;
}
