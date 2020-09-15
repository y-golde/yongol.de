import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
                    <NavbarBrand>Yonatan Golde</NavbarBrand>
                    <NavbarToggler
                        onClick={() => this.toggleNavbar()}
                        className="mr-2"
                    />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/doch">
                                    Doch one automator
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/spotifyLinks">
                                    Spotify Links
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    About
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink href="/#about">
                                            Work experience
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/#projects">
                                            Projects
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/#contact">
                                            Contact Me
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
