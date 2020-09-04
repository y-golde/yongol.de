import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

export default class Jumbo extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="head-jumbo" fluid id="jumbo">
                    <Container fluid>
                        <Row>
                            <Col md="8" xs="12" className="jumbo-text-wrapper">
                                <h1 className="display-3 jumbo-headline">
                                    Johnathan Golde
                                </h1>
                                <p className="lead jumbo-description">
                                    A Full Stack Developer with Approx. 3 years
                                    of experience, looking for an entry level
                                    position that will allow me to continue and
                                    grow as a Software Engineer
                                </p>
                            </Col>
                            <Col md="4" xs="12">
                                <img
                                    src="./assets/images/profile-square.png"
                                    alt=""
                                    className="profile-round"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
