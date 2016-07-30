import * as React from "react";
import {Score} from "../state";
import {FlexPanel} from "./FlexPanel";

export function Scorebox(props: Score) {
    return <FlexPanel direction="column">
        Clickers: {props.clickers}<br/>
        Players: {props.players}<br/>
        Clicks: {props.clicks}
    </FlexPanel>;
}
