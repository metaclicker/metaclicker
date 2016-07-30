import * as state from "./state";

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

export function reduce(s: state.State, a: Command): state.State {
    let newState: state.State = {
        clicks: s.clicks - a.cost,
        clickers: s.clickers.map(c => ({
            name: c.name,
            players: c.players
        }))
    };

    switch (a.commandType) {     
        case "DEVELOP":
            newState.clickers.push({
                name: getUniqueName(newState.clickers),
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

function getUniqueName(clickers: state.Clicker[]): string {
    return "Clicker Game " + (clickers.length + 1);
}