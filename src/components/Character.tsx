import * as React from "react";
import * as state from "../state";
import {Tooltip} from "../widgets/Tooltip";
let styles = require("./Character.css");

export class Character extends React.Component<state.Clicker, {}> {
    render() {
        return <Tooltip text={this.props.name}>
            <div className={`${styles['main']} ${styles['bobbing']}`}>🤓</div>
        </Tooltip>;
    }
}