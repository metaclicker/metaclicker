import * as Redux from "redux";
import * as _ from "lodash";
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

export function reduce(s: state.State, a: Action): state.State {
    if (typeof s === "undefined") { return init(); }
    
    switch (a.type) {
        case "TICK":
            return _.merge({}, s, {
                clicks: s.clicks + s.clickers.map(c => c.players).reduce((x, y) => x + y, 0),
            });

        case "COMMAND":
            return commands.reduce(s, a as commands.Command);

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
