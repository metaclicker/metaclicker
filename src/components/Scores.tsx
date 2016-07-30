import * as React from "react";
import {Score} from "../state";
import {FlexPanel} from "./FlexPanel";
import {Header} from "./Header";
import {Box} from "./Box";

export function Scores(props: Score) {
    return <Box color="green" padding={5}>
        <FlexPanel direction="column">
            <Header>Clickers: {props.clickers}</Header>
            <Header>Players: {props.players}</Header>
            <Header>Clicks: {props.clicks}</Header>
        </FlexPanel>
    </Box>;
}
