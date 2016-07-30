import * as React from "react";
import * as state from "../state";
import {FlexPanel} from "../widgets/FlexPanel";
import {FixedPanel} from "../widgets/FixedPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {Scores} from "./Scores";
import {Commands} from "./Commands";

export class Menu extends React.Component<{}, {}> {
    render() {
        return <FlexPanel height="80px" direction="row" justify="space-around">
            <BorderPanel width="800px" border="0px 2px 2px 2px">
                <FlexPanel direction="row">
                    <BorderPanel width="200px" border="0px 2px 0px 0px">
                        <Scores/>
                    </BorderPanel>

                    <div style={{flex: 1, fontFamily: "Verdana", fontSize: "48pt", color: "#222", textAlign: "center"}}>Metaclicker</div>

                    <BorderPanel width="200px" border="0px 0px 0px 2px">
                        <Commands/>
                    </BorderPanel>
                </FlexPanel>
            </BorderPanel>
        </FlexPanel>;
    }
}