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
                    <meta property="og:title" content="Spotify Links" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://y-gol.de/spotifyLinks"
                    />
                    <meta
                        property="og:image"
                        content="https://y-gol.de/assets/images/favicon.ico"
                    />
                    <meta
                        property="og:description"
                        content="A web page that allows you to find links between two artists using A* search algorithm"
                    />
                </Helmet>
                <LinksJumbo />
                <LinksExplanation />
            </div>
        );
    }
}
