import * as _ from "lodash";
import * as state from "./state";

type ActionType = "TICK" | "COMMAND"

export interface Action {
    type: ActionType
}

export function tick(): Action {
    return {
        type: "TICK"
    }
}

export function reduce(s: state.State = init(), a: Action) { 
    switch (a.type) {
        case "TICK":
            return _.merge({}, s, {
                clickers: s.clickers.length == 0 ? [{
                    name: "Developer",
                    players: 1
                }] : s.clickers,
                clicks: s.clicks + s.clickers.map(c => c.players).reduce((x, y) => x + y, 0),
            });

        case "COMMAND":
            return command(s, a as Command);

        default:
            return s;
    }
}

function init(): state.State {
    return {
        clicks: 50,
        clickers: []
    }
}

type CommandType = "PLAY" | "ADVERTISE" | "DEVELOP"

export interface Command {
    type: "COMMAND",
    commandType: CommandType,
    name: string,
    cost: number
}

export let all: Command[] = [
    { type: "COMMAND", commandType: "DEVELOP", name: "Develop a new game", cost: 50 },
    { type: "COMMAND", commandType: "PLAY", name: "Play your own games", cost: 0 },
    { type: "COMMAND", commandType: "ADVERTISE", name: "Advertise on forums", cost: 5 },
]

function command(s: state.State, a: Command) {
    let newState = _.merge({}, s, {
        clicks: s.clicks - a.cost,
    });

    switch (a.commandType) {     
        case "DEVELOP":
            newState.clickers.push({
                name: makeName(newState.clickers),
                players: 0
            });
            break;
      
        case "PLAY":
            newState.clicks += s.clickers.length;
            break;

        case "ADVERTISE":
            for (let c of newState.clickers) {
            	c.players++;
            }
            break;
    }

    return newState;
}

function makeName(clickers: state.Clicker[]) {
    return "Clicker Game " + (clickers.length + 1);
}