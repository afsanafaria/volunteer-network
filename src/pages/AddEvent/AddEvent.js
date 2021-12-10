import axios from 'axios';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddEvent.css'

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://frozen-chamber-91634.herokuapp.com/events', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert("Posted Successfully");
                    reset();
                }
            })

    };
    return (
        <div className="add-event mt-5 pt-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <ul>
                            <li>Volunteer Register List</li>
                            <li>Add Event</li>
                        </ul>
                    </Col>
                    <Col md={8}>

                        <Row>
                            <Col className="ps-lg-5">
                                <h2>Add Event</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" {...register("name")} className="w-80 form-control mb-2" placeholder="Enter title" />
                                    <textarea  {...register("description")} className="w-80 form-control mb-2" placeholder="Enter Description" />
                                    <input type="date" {...register("date")} className="w-80 form-control mb-2" placeholder="Enter Date" />
                                    <input type="file" {...register("img")} className="w-80 form-control mb-2" placeholder="Enter Date" />
                                    <input className="btn btn-primary " type="submit" />
                                </form>
                            </Col>
                        </Row>

                    </Col>


                </Row>
            </Container>

        </div>
    );
};

export default AddEvent;