import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { googleSignIn, setError, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const redirect_url = location.state?.from || './home';
    // console.log(redirect_url)



    const handleGoggle = () => {
        setIsLoading(true);
        googleSignIn()
            .then((result) => {
                // console.log(result.user)
                // setUser(result.user)

                history.push(redirect_url)
                setError('')

            }).catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="login mt-5 pt-5 bg-light">
            <div >
                <Container className=" mx-lg-5">
                    <Row className=" mx-lg-5">
                        <Col className="mx-lg-5 py-lg-5">
                            <Card className="mx-lg-5 py-lg-5 w-100 text-center mx-auto" >
                                <img className="text-center mx-auto mb-4 "
                                    src="https://i.im.ge/2021/10/27/o000ED.md.png"
                                    width="180"
                                    height="40"
                                    alt="Volunteer Network"
                                />
                                <h6>Login with</h6>
                                <input onClick={handleGoggle} className="w-50 my-2 text-center mx-auto  form-control" type="submit" value="Continue with google" />
                                <p>Don't have an account?</p> <Link>Create an account</Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;