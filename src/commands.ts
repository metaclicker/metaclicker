import * as state from "./state";

type CommandType = "PLAY" | "ADVERTISE" | "DEVELOP"

export interface Command {
    type: "COMMAND",
    commandType: CommandType,
    name: string,
    cost: number
}

export let all: Command[] = [
    { type: "COMMAND", commandType: "PLAY", name: "Play your own games", cost: 0 },
    { type: "COMMAND", commandType: "ADVERTISE", name: "Advertise on forums", cost: 5 },
    { type: "COMMAND", commandType: "DEVELOP", name: "Develop a new game", cost: 50 }
]

export function reduce(s: state.Score, a: Command): state.Score {
    let score = Object.assign({}, s, {clicks: s.clicks - a.cost});

    switch (a.commandType) {           
        case "PLAY":
            score.clicks += s.clickers;
            break;

        case "ADVERTISE":
            score.players++;
            break;

        case "DEVELOP":
            score.clickers++;
            break;
    }

    return score;
}
