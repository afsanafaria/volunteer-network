import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './VolunteerList.css'

const VolunteerList = () => {
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(() => {
        fetch('https://frozen-chamber-91634.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setVolunteerList(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,You want to delete?');
        if (proceed) {
            fetch(`https://frozen-chamber-91634.herokuapp.com/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingUsers = volunteerList.filter(user => user._id !== id);
                        setVolunteerList(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="volunteer-list mt-5 pt-5">
            <h2>Volunteer List {volunteerList.length}</h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        volunteerList.map(volunteer => (
                            <div>
                                <Col>
                                    <Card style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>Event Name: {volunteer.name}</Card.Title>
                                            <Card.Text>
                                                <p>Volunteer Name:{volunteer.fullName}</p>
                                                <p>Email:{volunteer.email}</p>
                                            </Card.Text>
                                            <Button variant="primary"
                                                onClick={() => handleDelete(volunteer._id)}>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        ))
                    }
                </Row>
            </Container>


        </div>
    );
};

export default VolunteerList;