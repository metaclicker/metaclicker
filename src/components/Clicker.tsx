import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
let styles = require("./Clicker.css");

export class Clicker extends React.Component<state.Clicker, {}> {
    static height: number = 75;
    static width: number = 150;

    render() {
        return <div className={styles['oval']} style={{height: Clicker.height, width: Clicker.width}}>
            {this.props.name}<br/>
            {this.props.players} players
        </div>;
    }
}