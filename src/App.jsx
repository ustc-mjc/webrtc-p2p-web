import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Samples from "./Samples";
import Camera from "./Camera";
import P2PClient from "./p2p/P2PClient";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    {/* 首页 */}
                    <Route exact path="/" component={Samples} />
                    <Route exact path="/camera" component={Camera} />
                    <Route exact path="/p2pClient" component={P2PClient} />
                </div>
            </Router>
        )

    }
}

export default App;