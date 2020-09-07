import React, { Component } from "react";
import NavBarTest from "../components/Nav.jsx";
import $ from "jquery";
import DochJumbo from "../dochOneComponents/DochJumbo.jsx";

import "../css/doch.scss";
import DochExplanation from "../dochOneComponents/DochExplanation.jsx";

export default class Doch extends Component {
    state = {
        test: "TEST",
        navVisible: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.testHeight.bind(this), true);
    }

    testHeight() {
        console.log(document.getElementById("jumbo").offsetHeight);
        //if the windows scroll value is bigget than the jumbotron
        if (window.scrollY > document.getElementById("jumbo").offsetHeight) {
            this.setState({ navVisible: true });
        } else {
            this.setState({ navVisible: false });
        }
    }

    test() {
        $.ajax({
            url: "http://y-gol.de:1323/api/doch",
            type: "POST",
            headers: {
                "Referrer-Policy": "origin",
            },
            dataType: "json",
            data: JSON.stringify({
                name: "test",
                lastName: "shmest",
            }),
            contentType: "application/json",
        });
    }

    test2() {
        $.ajax({
            url: "http://y-gol.de:1323/api/users",
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.navVisible && <NavBarTest />}
                <div className="doch-wrapper">
                    <DochJumbo />
                    <DochExplanation />
                </div>
            </React.Fragment>
        );
    }
}
