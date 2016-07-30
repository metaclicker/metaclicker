import * as Redux from "redux";
import * as state from "./state";
import * as commands from "./commands";

type ActionType = "TICK" | "COMMAND"

export interface Action {
    type: ActionType
}

export function tick(): Action {
    return {
        type: "TICK"
    }
}

export function reduce(s: state.Score, a: Action): state.Score {
    if (typeof s === "undefined") { return init(); }
    
    switch (a.type) {
        case "TICK":
            return Object.assign({}, s, {
                clicks: s.clicks + (s.players * s.clickers),
            });

        case "COMMAND":
            return commands.reduce(s, a as commands.Command);

        default:
            return s;
    }
}

function init(): state.Score {
    return {
        clickers: 1,
        players: 0,
        clicks: 0,
    }
}
