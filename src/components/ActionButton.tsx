import * as React from "react";
import {FlexPanel} from "./FlexPanel";
let styles = require("./ActionButton.css");

interface Props {
    label: string,
    onClick: () => void,
    error?: string
}

export function ActionButton(props: Props) {
    if (props.error == null) {
        return <button className={styles['button']} onClick={props.onClick}>
                   {props.label}
               </button>;
    } else {
        return <button className={[styles['button'] + " " + styles['disabled']]} disabled={true}>
        	       {props.label}
	               <div className={styles['tooltip']}>{props.error}</div>
	           </button>;
    }
}
