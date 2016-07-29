import * as React from "react";
import {Score} from "./Score";


export function Scorebox(props: Score) {
    let boxStyle : React.CSSProperties = {
        position: "absolute", 
        top: 20, 
        left: 20,
        border: "1px solid black",
        padding: 5,
        fontFamily: "Verdana"
    }

    return <div style={boxStyle}>
        Clickers: {props.clickers}<br/>
        Clicks: {props.clicks}
    </div>;
}
