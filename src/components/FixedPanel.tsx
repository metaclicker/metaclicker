import * as React from "react";
import {Score} from "./Score";

interface Props {
    children?: React.ReactChild,
    x: number,
    y: number
}

export function FixedPanel(props: Props) {
    return <div style={{position: "absolute", top: props.y, left: props.x}}>
        {props.children}
    </div>;
}
