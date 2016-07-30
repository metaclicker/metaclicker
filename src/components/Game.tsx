import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import {FlexPanel} from "../widgets/FlexPanel";
import {FixedPanel} from "../widgets/FixedPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {Scores} from "./Scores";
import {Menu} from "./Menu";

interface Props {
    score: state.Score
}

class _Game extends React.Component<Props, {}> {
    render() {
        return <FlexPanel height="100px" direction="row" justify="space-around">
            <BorderPanel width="800px" border="0px 2px 2px 2px">
                <FlexPanel direction="row">
                    <BorderPanel width="200px" border="0px 2px 0px 0px">
                        <Scores/>
                    </BorderPanel>

                    <div style={{flex: 1, fontFamily: "Verdana", fontSize: "48pt", textAlign: "center"}}>Metaclicker</div>

                    <BorderPanel width="200px" border="0px 0px 0px 2px">
                        <Menu/>
                    </BorderPanel>
                </FlexPanel>
            </BorderPanel>
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