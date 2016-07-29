import * as React from "react";

export interface HelloProps { who: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello, {this.props.who}!</h1>;
    }
}
