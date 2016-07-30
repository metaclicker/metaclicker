import * as React from "react";
let styles = require("./Header.css");

interface Props {
    children?: React.ReactChild,
}

export function Header(props: Props) {
    return <span className={styles['header']}>{props.children}</span>;
}
