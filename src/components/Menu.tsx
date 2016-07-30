import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import * as commands from "../commands";
import {FlexPanel} from "../layout/FlexPanel";
import {Box} from "../layout/Box";
import {Header} from "../widgets/Header";
import {ActionButton} from "../widgets/ActionButton";

interface Props {
    score: state.Score,
    onCommand: (c: commands.Command) => void
}

function _Menu(props: Props) {
    return <Box color="green" padding={5}>
        <FlexPanel direction="column">
            <Header key="span">Actions:</Header>
            {commands.all.map(c => <ActionButton key={c.name} 
                                                 label={c.name}
                                                 error={props.score.clicks >= c.cost ? null : "requires " + c.cost + " clicks"}
                                                 onClick={() => props.onCommand(c)}/>)}
        </FlexPanel>
    </Box>
}

export let Menu = ReactRedux.connect(
    (s:state.Score) => ({score: s}), 
    (dispatch: ReactRedux.Dispatch<any>) => ({onCommand: (c: commands.Command) => {dispatch(c);}}) 
)(_Menu)
