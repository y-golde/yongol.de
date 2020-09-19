import React, { Component } from "react";
import {
    Row,
    Card,
    Col,
    Button,
    CardTitle,
    CardText,
    Badge,
    ButtonGroup,
} from "reactstrap";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

export default class Projects extends Component {
    state = {
        projects: [
            {
                title: "y-gol.de",
                tags: ["Nodejs", "React"],
                desc: "This website!",
                link: "https://github.com/y-golde/yongol.de",
            },
            {
                title: "Doch One sender",
                tags: ["Nodejs", "React", "golang"],
                desc: "A service that sends doch-one every morning at 8 AM",
                link: "https://github.com/y-golde/yongol.de",
                href: "/doch",
            },
            {
                title: "Spotify Link Finder",
                tags: ["Nodejs", "React"],
                desc:
                    "An application that finds the shortest path from one artist to another using A* search",
                link: "https://github.com/y-golde/spotifyLinker",
                href: "/spotifyLinks",
            },
            {
                title: "Food gambling reddit bot",
                tags: ["reddit", "python"],
                desc:
                    "A reddit bot for gambeling on what dished will be served in the food court",
                link: "#",
            },
            {
                title: "bombaGen",
                tags: ["golang"],
                desc:
                    "A generator that finds nested words between a given dictionary in order to make it easier to make dad jokes",
                link: "#",
            },
            {
                title: "SSR Example",
                tags: ["Nodejs", "React"],
                desc:
                    "A Server Site rendering boilerplate for applications built with React and Node.js",
                link: "https://github.com/y-golde/ssr-example",
            },
        ],
    };

    render() {
        const { projects } = this.state;

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };
        return (
            <div
                className="container-fluid projects-wrapper pt-0"
                id="projects"
            >
                <h1 className="text-center display-4 pt-1 mb-3"> Projects</h1>
                <div className="projects-description">
                    some side projects i've worked on
                </div>
                <Carousel responsive={responsive}>
                    {projects.map((project) => {
                        return (
                            <React.Fragment key={project.title}>
                                <Col sm="12">
                                    <Card body className="projects-project">
                                        <CardTitle>
                                            {project.title}{" "}
                                            {project.tags.map((tag) => {
                                                return (
                                                    <Badge
                                                        key={tag}
                                                        className={
                                                            "badge-" + tag
                                                        }
                                                    >
                                                        {tag}
                                                    </Badge>
                                                );
                                            })}
                                        </CardTitle>
                                        <CardText>{project.desc}</CardText>
                                        <ButtonGroup className="mt-auto">
                                            <a
                                                className="btn btn-prim"
                                                href={project.link}
                                            >
                                                To Github Repository
                                            </a>
                                            {project.href && (
                                                <Link
                                                    to={project.href}
                                                    className="btn btn-prim"
                                                >
                                                    To project!
                                                </Link>
                                            )}
                                        </ButtonGroup>
                                    </Card>
                                </Col>
                            </React.Fragment>
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}
