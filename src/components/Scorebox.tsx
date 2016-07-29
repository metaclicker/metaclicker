import * as React from "react";
import {Score} from "../Score";
import {Box} from "./Box";

export function Scorebox(props: Score) {
    return <Box>
        Clickers: {props.clickers}<br/>
        Players: {props.players}<br/>
        Clicks: {props.clicks}
    </Box>;
}
