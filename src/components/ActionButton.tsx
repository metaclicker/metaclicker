import * as React from "react";

interface Props {
    label: string,
    onClick: () => void,
}

export function ActionButton(props: Props) {
    return <button style={{fontFamily: "Verdana", fontSize: 18, color: "green", backgroundColor: "white"}} 
                   onClick={props.onClick}>{props.label}</button>;
}
