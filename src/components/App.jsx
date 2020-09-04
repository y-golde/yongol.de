import React, { Component } from "react";
import NavBarTest from "./Nav.jsx";
import Jumbo from "./Jumbo.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

class App extends Component {
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

export default App;
