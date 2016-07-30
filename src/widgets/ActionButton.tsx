import * as React from "react";
import {FlexPanel} from "./FlexPanel";
import {Tooltip} from "./Tooltip";
let styles = require("./ActionButton.css");

interface Props {
    label: string,
    onClick: () => void,
    error?: string
}

export function ActionButton(props: Props) {
    let c = props.error == null ? styles['button'] : styles['button'] + " " + styles['disabled'];
    return <Tooltip text={props.error}>
        <button className={c} 
                onClick={props.onClick}
                disabled={props.error != null}>
               {props.label}
        </button>
    </Tooltip>;
}
