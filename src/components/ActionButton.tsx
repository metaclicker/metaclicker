import * as React from "react";

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

    return <button style={style} disabled={props.error != null}
                   onClick={props.onClick}>{props.label}</button>;
}
