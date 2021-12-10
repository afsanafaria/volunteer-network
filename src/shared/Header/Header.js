import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    // const { userEmail } = useParams()
    const { user, googleSignOut } = useAuth();

    // const [singleUser, setSingleUser] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/${userEmail}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setSingleUser(data);

    //         })
    // }, [])

    // const userId = singleUser._id;



    return (
        <div className="header">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://i.im.ge/2021/10/27/o000ED.md.png"
                            width="250"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Volunteer Network"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="navbar" to="/home">Home</Link>
                            <Link className="navbar ms-lg-3" to="/volunteerlist">Volunteer List</Link>
                            <Link className="navbar ms-lg-3" to="/addevent">Add Event</Link>
                            <Link className="navbar ms-lg-3" to="/login">Login</Link>
                            {/* <Link className="navbar ms-lg-3" to={`/eventTasks/${user._id}`}>My Events</Link> */}
                            {
                                user.email && <><Link className="navbar ms-lg-3" to="/login">Sign in as:{user.email} </Link>
                                    {/* <Link className="navbar ms-lg-3" to={`/eventTasks/${userEmail}`}>My Events</Link> */}
                                    <Button className="ms-lg-3 bg-warning border b-0" onClick={googleSignOut}>Log Out</Button></>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;