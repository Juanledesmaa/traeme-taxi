import React from "react";
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import bannerSolid from "../../img/traeme-taxi-solid.png";
import './banner.scss';

const Banner = () => (
    <div className="banner">
        <section className="d-flex align-items-center mb-0 position-relative">
            <img src={bannerSolid} alt="" className="bg-banner"></img>
            <div className="shadow-overlay"></div>
            <Container className="button-container">
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} className="text-center mb-3 mb-sm-0">
                        <Button variant="primary" size="sm" block>
                            Llamar
                        </Button>
                    </Col>
                    <Col xs={12} sm={6} className="text-center">
                        <Button variant="secondary" size="sm" block>
                            Whatsapp
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
);

export default Banner;
