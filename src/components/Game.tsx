import * as React from "react";
import {Score} from "./Score";
import {Scorebox} from "./Scorebox";

export class Game extends React.Component<{}, Score> {
    constructor(props: {}) {
        super(props);
        this.state = {clickers: 0, clicks: 0};
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return <div>
            <Scorebox clickers={this.state.clickers} clicks={this.state.clicks}/>
            <br/><br/><br/><br/>
            <button onClick={() => this.click()}>Click</button>
            <button onClick={() => this.metaclick()}>Metaclick</button>
        </div>;
    }

    click() {
        this.setState({
            clicks: this.state.clicks + 1,
            clickers: this.state.clickers 
        });
    }

    metaclick() {
        this.setState({
            clicks: this.state.clicks,
            clickers: this.state.clickers + 1
        });
    }

    tick() {
        this.setState({
            clicks: this.state.clicks + this.state.clickers,
            clickers: this.state.clickers 
        });
    }
}
