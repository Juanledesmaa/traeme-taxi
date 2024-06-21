import React from "react";
import { Parallax } from 'react-parallax';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import background from "../../img/atlanta_background.png";
import './Contact.scss';

const Contact = () => (
    <div className="contact">
        <Parallax blur={{ min: -15, max: 15 }} bgImage={background} bgImageAlt="the cat" strength={-500} className="bg-banner">
            <div className="content-contact">
                <div className="content-box">
                    <h2><span className="first-word">¿Quiénes</span> <span className="last-word">somos?</span></h2>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </Parallax>
    </div>
);

export default Contact;
