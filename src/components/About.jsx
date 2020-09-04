import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export default class About extends Component {
    state = {
        titles: [
            {
                years: "2020-2019",
                title: "Full Stack Software Developer & Project Manager",
                description: `Built and maintained "MTV.IDF" website: included the
                "Knowledge management" and "Meitav Gantt" systems
                Created "Dapar.idf" website, a new CAT system for
                classifying recruits. Experience with the
                following technologies: JavaScript - React, Node.js,
                jQuery, Golang, MySQL, Git, R`,
                id: 1,
            },
            {
                years: "2020-2019",
                title: "QA & OPS Section Manager",
                description: `Managing a QA and OPS section for the "Mitgaisim"
                website - in charge of operating the website and
                testing new contents (such as Tzav Bareshet
                questionnaire and the medical questionnaire for new
                recruits).
                In charge of incorporating automatic testing into
                the project.`,
                id: 2,
            },
            {
                years: "2018",
                title: "Data Analyst",
                description: `Reports and data NCO at "Mitgaisim" section.
                Creating and analyzing SSRS reports.`,
                id: 3,
            },
            {
                years: "2017",
                title: "Frontend developer at InteractiveCats",
                description: `a web development software company
                Developed components and full sites in HTML5, CSS and JavaScript.
              `,
            },
        ],
    };
    render() {
        const { titles } = this.state;
        return (
            <div className="about-wrapper container-fluid" id="about">
                <h1 className="text-center display-4 pt-2"> Work experience</h1>
                <div className="about-text container-fluid pb-3">
                    <Row>
                        {titles.map((title) => {
                            return (
                                <React.Fragment key={title.title}>
                                    <Col xl="12" className="about-sub-header">
                                        <b>{title.years}</b> {title.title}
                                    </Col>
                                    <Col xl="12" className="about-description">
                                        {title.description}
                                    </Col>
                                </React.Fragment>
                            );
                        })}
                    </Row>
                </div>
            </div>
        );
    }
}
