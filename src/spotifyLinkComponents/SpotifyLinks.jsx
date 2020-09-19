import React, { Component } from "react";
import "../css/links.scss";
import LinksExplanation from "./LinksExplanation";
import LinksJumbo from "./LinksJumbo";

export default class SpotifyLinks extends Component {
    render() {
        return (
            <div>
                <LinksJumbo />
                <LinksExplanation />
            </div>
        );
    }
}
