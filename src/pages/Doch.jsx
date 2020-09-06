import React, { Component } from "react";
import NavBarTest from "../components/Nav.jsx";
import { Button } from "reactstrap";
import $ from "jquery";

export default class Doch extends Component {
    test() {
        console.log("baaaa");
        $.ajax({
            url: "http://localhost:1323/api/bruh",
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

    render() {
        return (
            <div>
                <NavBarTest />
                <Button className="mt-5" onClick={() => this.test()}>
                    dssd
                </Button>
            </div>
        );
    }
}
