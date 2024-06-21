import React from "react";
import { Parallax } from 'react-parallax';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//include images into your bundle
import background from "../../img/atlanta_background.png";
import './Contact.scss';


//create your first component
const Contact = () => (
    <div className="contact">
        <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
            <div className="content-contact">
                <div id="contact">
                    <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>

                    <div id="form" className="container bg-light p-5">
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div className="m-2">
                                    <a
                                        href="mailto:wvelagrundy@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline-danger" title="wvelagrundy@gmail.com">
                                            <i className="fas fa-envelope-square"></i> Email Me
                                        </Button>
                                    </a>
                                </div>
                                <div className="m-2">
                                    <a
                                        href="https://www.linkedin.com/in/walter-vela-grundy-324a65ba/?locale=en_US"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline-primary" title="Visit my LinkenIn">
                                            <i className="fab fa-linkedin"></i> LinkedIn
                                        </Button>
                                    </a>
                                </div>

                                <div className="m-2">
                                    <a
                                        href="https://www.instagram.com/waltervegr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline-info" title="Tweets are welcomed!">
                                            <i className="fab fa-twitter"></i> Instagram
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <div className="container bg-light p-5">
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div className="m-2">
                                    <a
                                        href="mailto:wvelagrundy@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline-danger" title="wvelagrundy@gmail.com">
                                            <i className="fas fa-envelope-square"></i> Email Me
                                        </Button>
                                    </a>
                                </div>
                                <div className="m-2">
                                    <a
                                        href="https://www.linkedin.com/in/walter-vela-grundy-324a65ba/?locale=en_US"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline-primary" title="Visit my LinkenIn">
                                            <i className="fab fa-linkedin"></i> LinkedIn
                                        </Button>
                                    </a>
                                </div>

                                <div className="m-2">
                                    <a
                                        href="https://www.instagram.com/waltervegr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline-info" title="Tweets are welcomed!">
                                            <i className="fab fa-twitter"></i> Instagram
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>


                </div>
            </div>

        </Parallax>
    </div>
);

export default Contact;
