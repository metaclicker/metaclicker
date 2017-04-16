import * as React from "react";
import {FlexBox} from "../widgets/FlexBox";
import {Canvas} from "./Canvas";

export class Game extends React.Component<{}, {}> {
    render() {
        return <FlexBox height="100vh">
            <Canvas/>
        </FlexBox>;
    }
}

declare var module: any;
if (module.hot) {
    module.hot.accept();
}