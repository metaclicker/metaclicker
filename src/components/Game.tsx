import * as React from "react";
import {Score} from "../Score";
import {Action} from "../Action";
import {FixedPanel} from "./FixedPanel";
import {FlexPanel} from "./FlexPanel";
import {Scorebox} from "./Scorebox";
import {ActionButton} from "./ActionButton";
import {Box} from "./Box";

export class Game extends React.Component<{}, Score> {
    actions: Action[] = [
        new Action("Play your own games", 0, s => ({
            clicks: s.clicks + s.clickers,
            clickers: s.clickers,
            players: s.players
        })),
        new Action("Advertise on forums", 5, s => ({
            clicks: s.clicks - 5,
            clickers: s.clickers,
            players: s.players + 1
        })),
        new Action("Develop a new game", 50, s => ({
            clicks: s.clicks - 50,
            clickers: s.clickers + 1,
            players: s.players
        }))
    ]

    constructor(props: {}) {
        super(props);
        this.state = {clickers: 1, players: 0, clicks: 0};
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return <div>
            <FixedPanel x={20} y={20} position="right">
                <Scorebox {...this.state}/>
            </FixedPanel>

            <FixedPanel x={20} y={20} position="left">
                <Box>
                <FlexPanel direction="column">
                    {[<span key="span">Actions:</span>].concat(this.actions.map(a =>
                    <ActionButton key={a.name} 
                                  label={a.cost + " clicks: " + a.name}
                                  error={this.state.clicks >= a.cost ? null : "foo"}
                                  onClick={() => this.setState(a.perform(this.state))}/>))}
                </FlexPanel>
                </Box>
            </FixedPanel>
        </div>;
    }

    tick() {
        this.setState({
            clicks: this.state.clicks + (this.state.players * this.state.clickers),
            clickers: this.state.clickers,
            players: this.state.players,
        });
    }

    buyClicker() {
        this.setState({
            clicks: this.state.clicks,
            clickers: this.state.clickers + 1,
            players: this.state.players,
        });
    }

    playGames() {
        this.setState({
            clicks: this.state.clicks + this.state.clickers,
            clickers: this.state.clickers,
            players: this.state.players,
        });
    }

    advertise() {
        this.setState({
            clicks: this.state.clicks,
            clickers: this.state.clickers,
            players: this.state.players + 1,
        });
    }
}
