import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

export default class NavBarTest extends Component {
    state = {
        collapsed: true,
    };
    toggleNavbar() {
        const collapsedTemp = this.state.collapsed;
        this.setState({ collapsed: !collapsedTemp });
    }
    render() {
        const { collapsed } = this.state;
        return (
            <div>
                <Navbar className="nav navbar-expand-lg fixed-top" light>
                    <NavbarBrand>Johnathan Golde</NavbarBrand>
                    <NavbarToggler
                        onClick={() => this.toggleNavbar()}
                        className="mr-2"
                    />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#about">Work experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact Me</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
