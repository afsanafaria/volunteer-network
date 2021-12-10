import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './VolunteerReg.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const VolunteerReg = () => {
    const { eventId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [volunteer, setVolunteer] = useState([])


    const [idEvent, setIdEvent] = useState([])
    useEffect(() => {
        fetch(`https://frozen-chamber-91634.herokuapp.com/events/${eventId}`)
            .then(res => res.json())
            .then(data => {
                setIdEvent(data);

            })
    }, [])


    const idTitle = idEvent.name;


    const onSubmit = data => {
        axios.post('https://frozen-chamber-91634.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    // window.confirm("Please Check your data again")
                    setVolunteer(data)
                    reset();

                }
            })

    };
    return (
        <div className="volunteer-reg mt-5 pt-5 bg-light">
            <Container>
                <Row>

                    <Col>
                        <Card style={{ width: '20rem' }} className="mx-auto mt-lg-5  p-lg-2" >
                            <Card.Body className="m-lg-2">
                                <Card.Title>Register as Volunteer</Card.Title>
                                {
                                    volunteer.fullName && <p>Hi {volunteer.fullName} id:{volunteer._id}!</p>

                                }

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" {...register("fullName")} className="w-100 form-control mb-2" placeholder="Full Name" />
                                    <input  {...register("email")} value={user.email} className="w-100 form-control mb-2" placeholder="Email" />
                                    <input type="date" {...register("date")} className="w-100 form-control mb-2" placeholder="Enter Date" />
                                    <input type="text" {...register("description")} className="w-100 form-control mb-2" placeholder="Description" />
                                    <input  {...register("name")} value={idTitle} className="w-100 form-control mb-2" placeholder="Title" />
                                    <input className="w-100 btn btn-primary mb-2" type="submit" value="Registration" />
                                    {
                                        volunteer.fullName && <Link to={`/eventTasks/${volunteer.email}`}>My Events</Link>
                                    }
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default VolunteerReg;