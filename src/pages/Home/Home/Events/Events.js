import React from 'react';
import { Row } from 'react-bootstrap';
import useEvents from '../../../../hooks/useEvents';
import Event from '../Event/Event';
import './Events.css'
const Events = () => {
    const { events } = useEvents();

    return (
        <div className="events">
            <Row xs={1} md={4} className="g-4 w-100">
                {
                    events.map(event => <Event key={event._id} event={event} ></Event>)
                }
            </Row>
        </div>
    );
};

export default Events;