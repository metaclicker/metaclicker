import * as React from "react";
import {Score} from "./Score";

export function Scorebox(props: Score) {
    let boxStyle : React.CSSProperties = {
        border: "1px solid green",
        padding: 5,
        fontFamily: "Verdana"
    }

    return <div style={boxStyle}>
        Clickers: {props.clickers}<br/>
        Clicks: {props.clicks}
    </div>;
}
