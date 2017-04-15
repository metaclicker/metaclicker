import * as React from "react";
import * as state from "../state";
let styles = require("./Clicker.css");

export class Clicker extends React.Component<state.Clicker, {}> {
    static height: number = 100;
    static width: number = 161.8;

    render() {
        return <div className={styles['oval']} style={{height: Clicker.height, width: Clicker.width}}>
            {this.props.name}<br/>
            {this.props.players} players
        </div>;
    }
}