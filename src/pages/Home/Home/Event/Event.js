import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css'

const Event = (props) => {
    const { _id, name, img } = props.event;
    return (
        <div className="event">
            <CardGroup>
                <Col>
                    <Link className="event-link" to={`/volunteerreg/${_id}`}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body className="bg-warning">
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </CardGroup>

        </div>
    );
};

export default Event;