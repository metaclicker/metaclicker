import * as React from "react";
let styles = require("./HeaderText.css");

interface Props {
    children?: React.ReactChild,
}

export function HeaderText(props: Props) {
    return <span className={styles['header']}>{props.children}</span>;
}
