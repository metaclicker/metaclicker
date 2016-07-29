import {Score} from "./Score";

export class Action {
    name: string;
    cost: number;
    perform: (s: Score) => Score;

    constructor(name: string, cost: number, perform: (s: Score) => Score) {
        this.name = name;
        this.cost = cost;
        this.perform = perform;
    }
}