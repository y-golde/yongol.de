import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

export default class DochJumbo extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="doch-jumbo" fluid id="jumbo">
                    <Container fluid>
                        <Row>
                            <Col
                                md="12"
                                xs="12"
                                className="jumbo-text-wrapper p-5"
                            >
                                <h1 className="display-2 jumbo-headline">
                                    דוח אחד באינטרנט זה גרוע
                                </h1>
                                <p className="lead jumbo-description doch-description">
                                    אבל אפשר לעשות משהו בנוגע לזה
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
