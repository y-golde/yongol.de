import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Doch from "./pages/Doch";
import SpotifyLinks from "./spotifyLinkComponents/SpotifyLinks";

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
                        <Route path="/spotifyLinks">
                            <SpotifyLinks />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
