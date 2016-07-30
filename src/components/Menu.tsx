import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import * as commands from "../commands";
import {FlexPanel} from "../widgets/FlexPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {HeaderText} from "../widgets/HeaderText";
import {ActionButton} from "../widgets/ActionButton";

interface Props {
    score: state.Score,
    onCommand: (c: commands.Command) => void
}

function _Menu(props: Props) {
    return <FlexPanel direction="column" padding="5px">
        {commands.all.map(c => <ActionButton key={c.name} 
                                                label={c.name}
                                                error={props.score.clicks >= c.cost ? null : "requires " + c.cost + " clicks"}
                                                onClick={() => props.onCommand(c)}/>)}
    </FlexPanel>;
}

export let Menu = ReactRedux.connect(
    (s:state.Score) => ({score: s}), 
    (dispatch: ReactRedux.Dispatch<any>) => ({onCommand: (c: commands.Command) => {dispatch(c);}}) 
)(_Menu)
