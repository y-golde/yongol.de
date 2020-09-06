import React, { Component } from "react";
import NavBarTest from "../components/Nav.jsx";
import Jumbo from "../components/Jumbo.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import { Link } from "react-router-dom";

export default class MainPage extends Component {
    state = {
        test: "TEST",
        navVisible: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.testHeight.bind(this), true);
    }

    testHeight() {
        //if the windows scroll value is bigget than the jumbotron
        if (window.scrollY > document.getElementById("jumbo").offsetHeight) {
            this.setState({ navVisible: true });
        } else {
            this.setState({ navVisible: false });
        }
    }
    render() {
        return (
            <div>
                {this.state.navVisible && <NavBarTest />}
                <Jumbo />
                <About />
                <Projects />
                <Contact />
            </div>
        );
    }
}
