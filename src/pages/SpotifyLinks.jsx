import React, { Component } from "react";
import "../css/links.scss";
import LinksExplanation from "../spotifyLinkComponents/LinksExplanation";
import LinksJumbo from "../spotifyLinkComponents/LinksJumbo";
import { Helmet } from "react-helmet";

export default class SpotifyLinks extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Spotify Links</title>
                </Helmet>
                <LinksJumbo />
                <LinksExplanation />
            </div>
        );
    }
}
