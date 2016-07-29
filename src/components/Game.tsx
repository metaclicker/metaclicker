import * as React from "react";
import {Score} from "./Score";
import {FixedPanel} from "./FixedPanel";
import {FlexPanel} from "./FlexPanel";
import {Scorebox} from "./Scorebox";
import {ActionButton} from "./ActionButton";

export class Game extends React.Component<{}, Score> {
    constructor(props: {}) {
        super(props);
        this.state = {clickers: 0, clicks: 0};
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return <div>
            <FixedPanel x={150} y={20}>
                <Scorebox clickers={this.state.clickers} clicks={this.state.clicks}/>
            </FixedPanel>

            <FixedPanel x={20} y={20}>
                <FlexPanel direction="column">
                    <ActionButton onClick={() => this.click()} label="Click"/>
                    <ActionButton onClick={() => this.metaclick()} label="Metaclick"/>
                </FlexPanel>
            </FixedPanel>
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
