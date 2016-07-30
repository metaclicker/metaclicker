import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import * as commands from "../commands";
import {FixedPanel} from "./FixedPanel";
import {FlexPanel} from "./FlexPanel";
import {Scorebox} from "./Scorebox";
import {ActionButton} from "./ActionButton";
import {Box} from "./Box";

interface Props {
    score: state.Score,
    onCommand: (c: commands.Command) => void
}

class _Game extends React.Component<Props, {}> {
    render() {
        return <div>
            <FixedPanel x={20} y={20} position="right">
                <Box><Scorebox {...this.props.score}/></Box>
            </FixedPanel>

            <FixedPanel x={20} y={20} position="left">
                <Box>
                    <FlexPanel direction="column">
                        <span key="span">Actions:</span>
                        {commands.all.map(c => <ActionButton key={c.name} 
                                                             label={c.cost + " clicks: " + c.name}
                                                             error={this.props.score.clicks >= c.cost ? null : "foo"}
                                                             onClick={() => this.props.onCommand(c)}/>)}
                    </FlexPanel>
                </Box>
            </FixedPanel>
        </div>;
    }
}

export let Game = ReactRedux.connect(
    (s:state.Score) => ({score: s}), 
    (dispatch: ReactRedux.Dispatch<any>) => ({onCommand: (c: commands.Command) => {dispatch(c);}}) 
)(_Game)