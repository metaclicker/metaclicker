import * as React from "react";

interface Props {
    children?: React.ReactChild
    direction: "row" | "column"
}

export function FlexPanel(props: Props) {
    return <div style={{display: "flex", flexDirection: props.direction}}>
        {props.children} 
    </div>;
}
