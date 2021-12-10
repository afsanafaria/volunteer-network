import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notfound from '../../images/NotFound/notFound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <Container fluid>
                <Row className="w-100">
                    <Col>
                        <img className="w-100"
                            src={notfound}
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;