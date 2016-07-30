import * as React from "react";
import {FlexPanel} from "./FlexPanel";

interface Props {
    label: string,
    onClick: () => void,
    error?: string
}

export function ActionButton(props: Props) {
    let style: React.CSSProperties = {
        fontFamily: "Verdana", 
        fontSize: 18, 
        color: props.error == null ? "blue" : "grey",
        textDecoration: "underline",
        backgroundColor: "white",
        border: "0px",
        margin: 2
    }

    if (props.error == null) {
        return <button style={style} onClick={props.onClick}>{props.label}</button>;
    } else {
        return <FlexPanel direction="column">
            <button style={style} disabled={true}>{props.label}</button>
            {props.error}
        </FlexPanel>;
    }
}
