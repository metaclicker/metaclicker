import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import {FlexPanel} from "../widgets/FlexPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {HeaderText} from "../widgets/HeaderText";

interface Props {
    clicks: number;
    clickers: number;
    players: number;
}

function _Scores(props: Props) {
    return <FlexPanel direction="column" padding="5px">
        <HeaderText>Clickers: {props.clickers}</HeaderText>
        <HeaderText>Players: {props.players}</HeaderText>
        <HeaderText>Clicks: {props.clicks}</HeaderText>
    </FlexPanel>;
}

export let Scores = ReactRedux.connect(
    (s:state.State) => ({
        clicks: s.clicks,
        clickers: s.clickers.length,
        players: s.clickers.map(c => c.players).reduce((x, y) => x + y, 0)
    })
)(_Scores)
