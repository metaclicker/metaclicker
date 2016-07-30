import * as React from "react";
let styles = require("./Box.css");

export function Box(props: {children?: React.ReactChild}) {
    return <div className={styles['box']}>{props.children}</div>;
}
