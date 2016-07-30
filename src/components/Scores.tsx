import * as React from "react";
import {Score} from "../state";
import {FlexPanel} from "../widgets/FlexPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {HeaderText} from "../widgets/HeaderText";

export function Scores(props: Score) {
    return <BorderPanel color="green" padding={5}>
        <FlexPanel direction="column">
            <HeaderText>Clickers: {props.clickers}</HeaderText>
            <HeaderText>Players: {props.players}</HeaderText>
            <HeaderText>Clicks: {props.clicks}</HeaderText>
        </FlexPanel>
    </BorderPanel>;
}
