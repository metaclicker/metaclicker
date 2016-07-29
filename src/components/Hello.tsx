import * as React from "react";

interface Props {
    who: string
}

interface State {
    n: number
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {n: 0}
    }

    render() {
        return <div>
            <h2>Hello, {this.props.who}!</h2>
            <p>Number: {this.state.n}</p> <button onClick={() => this.inc()}>++</button>
        </div>;
    }

    inc() {
        this.setState({n: this.state.n + 1});
    }
}
