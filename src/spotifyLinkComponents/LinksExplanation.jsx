import React, { Component } from "react";
import { Row, Col, Badge } from "reactstrap";
import io from "socket.io-client";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const socket = io("/api/links");

export default class LinksExplanation extends Component {
    constructor(props) {
        super(props);
        this.searchFrom = this.searchFrom.bind(this);
        this.searchTo = this.searchTo.bind(this);
        this.selectFrom = this.selectFrom.bind(this);
        this.selectTo = this.selectTo.bind(this);
        this.sendLink = this.sendLink.bind(this);
    }
    componentDidMount() {
        socket.on("searchResultF", (data) => {
            const artists = data.map((artist) => ({
                value: artist.id,
                label: artist.name,
                image: artist.image,
            }));
            this.setState({ fromSearchLoading: false, searchFrom: artists });
        });
        socket.on("searchResultT", (data) => {
            const artists = data.map((artist) => ({
                value: artist.id,
                label: artist.name,
                image: artist.image,
            }));
            this.setState({ toSearchLoading: false, searchTo: artists });
        });

        socket.on("currentlyLoading", (artistId, image) => {
            this.setState({
                currentlyLoading: { name: artistId, image: image },
            });
        });

        socket.on("getFullStack", (stack) => {
            this.setState({
                currentlyLoading: {},
                finalPath: stack,
            });
            console.log(stack);
        });
    }
    searchFrom(test) {
        socket.emit("search", test, "F");
    }
    searchTo(test) {
        socket.emit("search", test, "T");
    }
    selectFrom(value) {
        const from = value;
        if (from) {
            this.setState({
                from: from.value,
            });
        } else {
            this.setState({
                from: "",
            });
        }
    }
    selectTo(value) {
        const to = value;
        if (to) {
            this.setState({
                to: to.value,
            });
        } else {
            this.setState({
                to: "",
            });
        }
    }

    state = {
        from: "",
        to: "",
        searchFrom: [],
        searchTo: [],
        toImg: "",
        fromImg: "",
        currentlyLoading: {},
        finalPath: [],
    };

    sendLink() {
        const { from, to } = this.state;
        if (from != "" && to != "") {
            this.setState({
                finalPath: [],
            });
            socket.emit("getLink", { from: from, to: to });
        } else {
            alert("please fill in the feilds");
        }
        console.log("sending request ", from, to);
    }
    render() {
        const {
            searchFrom,
            searchTo,
            currentlyLoading,
            finalPath,
        } = this.state;
        return (
            <div>
                <div className="links-header display-3"> How? </div>
                <div className="container-fluid">
                    <Row>
                        <Col md="6" sm="12">
                            <div className="links-subheader">
                                Pick artist #1
                            </div>
                            <Select
                                id="fromSearch"
                                options={searchFrom}
                                onInputChange={this.searchFrom}
                                isClearable={true}
                                onChange={this.selectFrom}
                            />
                        </Col>
                        <Col md="6" sm="12">
                            <div className="links-subheader">
                                Pick artist #2
                            </div>
                            <Select
                                id="toSearch"
                                options={searchTo}
                                onInputChange={this.searchTo}
                                isClearable={true}
                                onChange={this.selectTo}
                            />
                        </Col>
                    </Row>
                </div>
                <div sm="12" className="d-flex justify-content-center mt-3">
                    <button className="btn btn-links" onClick={this.sendLink}>
                        Find Link
                    </button>
                </div>
                <div>
                    {currentlyLoading.name && (
                        <div>
                            <div className="links-currentlyLoading">
                                <div className="display-4">
                                    Looking for links
                                    <FontAwesomeIcon
                                        icon={faSpinner}
                                        spin
                                        className="links-loading"
                                    ></FontAwesomeIcon>
                                </div>
                                <div>
                                    <div className="links-loading-details">
                                        <img
                                            className="links-loading-img"
                                            src={currentlyLoading.image.url}
                                            alt={currentlyLoading.name}
                                        />
                                        <span>{currentlyLoading.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {finalPath[0] && (
                        <div className="links-final">
                            <div className="links-header text-left display-3">
                                {" "}
                                The Path :{" "}
                            </div>
                            <div className="links-final-description">
                                this is the shortest path from the first artist
                                to the second one using related artists on
                                spotify
                            </div>
                            {finalPath.map((path) => {
                                return (
                                    <div
                                        key={path.name}
                                        className="links-artist"
                                    >
                                        <a
                                            href={`https://open.spotify.com/artist/${path.id}`}
                                            className="links-artist-headline"
                                            target="_blank"
                                        >
                                            {path.name}
                                        </a>
                                        <div>
                                            Genres
                                            {path.genres.map((genre) => {
                                                return (
                                                    <Badge
                                                        key={genre}
                                                        className="links-badge"
                                                    >
                                                        {genre}
                                                    </Badge>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
