import * as React from "react";
import * as ReactRedux from "react-redux";
import * as state from "../state";
import {FixedPanel} from "../widgets/FixedPanel";

interface Props {
    clickers: state.Clicker[];
}

interface State {
    width: number;
    height: number;
    locations: {[key: string]: {x: number, y: number}}
}

class _Canvas extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {width: 0, height: 0, locations: {}};
    }

    render() {
        return <div ref="canvas" style={{flex: "1", position: "relative"}}>
            {Object.keys(this.state.locations).map(k => {
                let l = this.state.locations[k];  
                return <FixedPanel position="left" x={l.x} y={l.y}>
                    {k}
                </FixedPanel>
            })}
        </div>;
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.measure());
        this.measure();
        this.locate(this.props);
    }

    componentWillReceiveProps(nextProps: Props) {
        this.locate(nextProps);
    }

    measure() {
        let ref = this.refs['canvas'] as any;
        this.setState({
            width: ref.clientWidth, 
            height: ref.clientHeight,
            locations: this.state.locations
        });
    }

    locate(props: Props) {
        let dirty = false;

        for (let c of props.clickers) {
            if (!this.state.locations[c.name]) {
                dirty = true;
                this.state.locations[c.name] = {x: this.state.width/2, y: this.state.height/2}
            }
        }

        if (dirty) {
            this.setState(this.state);
        }
    }
}

export let Canvas = ReactRedux.connect(
    (s:state.State) => ({
        clickers: s.clickers,
    })
)(_Canvas)
