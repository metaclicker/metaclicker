import * as React from "react";
import * as ReactDOM from "react-dom";

import { Game } from "./components/Game";

ReactDOM.render(<Game/>, document.getElementsByTagName("main")[0]);

declare var module: any;
if (module.hot) {
    module.hot.accept();
}