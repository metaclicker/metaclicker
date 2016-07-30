import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import {Panel} from "../layout/Panel";
import {FlexPanel} from "../layout/FlexPanel";
import {FixedPanel} from "../layout/FixedPanel";
import {Box} from "../layout/Box";
import {Scores} from "./Scores";
import {Menu} from "./Menu";

interface Props {
    score: state.Score
}

class _Game extends React.Component<Props, {}> {
    render() {
        return <FlexPanel height="100vh" direction="row" justify="space-around">
            <Panel width="700px">
                <Box border="0px 2px 0px 2px">
                    <FlexPanel direction="column" justify="space-between" align="center">    
                        <FixedPanel x={20} y={20} position="left">
                            <Menu/>
                        </FixedPanel>
                        
                        <FixedPanel x={20} y={20} position="right">
                            <Scores {...this.props.score}/>
                        </FixedPanel>     

                        <div>Header or game title or something!</div>

                        <div>(content goes here)</div>

                        <div>footer content??</div>
                    </FlexPanel>
                </Box>
            </Panel>
        </FlexPanel>;
    }
}

export let Game = ReactRedux.connect(
    (s:state.Score) => ({score: s}) 
)(_Game)

declare var module: any;
if (module.hot) {
    module.hot.accept();
}