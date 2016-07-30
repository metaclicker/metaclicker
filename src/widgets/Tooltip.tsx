import * as React from "react";
let styles = require("./Tooltip.css");

interface Props {
    children?: React.ReactChild,
    text: string
}

export function Tooltip(props: Props) {
    if (props.text == null) {
        return <div>{props.children}</div>;
    } else {
        return <div className={styles['target']}>
            {props.children} 
            <div className={styles['tooltip']}>{props.text}</div>
        </div>;
    }
}
