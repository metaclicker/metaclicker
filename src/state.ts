export interface Clicker {
    name: string;
    players: number;
}

export interface State {
    clicks: number;
    clickers: Clicker[];
}