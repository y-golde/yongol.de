import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Doch from "./pages/Doch";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/doch">
                            <Doch />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
