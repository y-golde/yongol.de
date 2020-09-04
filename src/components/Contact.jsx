import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div
                    className="container-fluid contact-wrapper pt-0"
                    id="contact"
                >
                    <h1 className="text-center display-4 pt-1 pb-3 mb-3">
                        Contact me!
                    </h1>
                    <div className="container-fluid">
                        <div className="contact-option">
                            <FontAwesomeIcon icon={faAt} />
                            <a href="mailto:yon.golde@gmail.com">
                                yon.golde@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="contact-option">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+972-54-580-2270">+972-54-580-2270</a>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="contact-option">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                color="#0077b5"
                            />
                            <a href="https://www.linkedin.com/in/johnatan-golde-124369172/">
                                Linked in
                            </a>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="contact-option">
                            <FontAwesomeIcon icon={faPaperclip} />
                            <a
                                href="/assets/documents/Johnathan-Golde-CV.pdf"
                                download
                            >
                                CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
