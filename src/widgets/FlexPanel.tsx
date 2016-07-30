import * as React from "react";

interface Props {
    children?: React.ReactChild
    width?: number | string,
    height?: number | string,
    margin?: number | string,
    padding?: number | string,
    direction?: "column" | "row",
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around",
    align?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline",
    flex?: number | string,
}

export function FlexPanel(props: Props) {
    let panelStyle = {
        width: props.width || "100%",
        height: props.height || "100%",
        padding: props.padding,
        margin: props.margin,
        position: "relative",
        display: "flex",
        flexDirection: props.direction || "column",
        justifyContent: props.justify || "flex-start",
        alignItems: props.align || "stretch", 
    };

    return <div style={panelStyle}>
        {React.Children.map(props.children, (c) => {
            if (props.flex) { 
                return <div style={{flex: props.flex}}>{c}</div>;
            } else {
                return c;
            }
        })} 
    </div>;
}
