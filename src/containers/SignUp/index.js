import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signup } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.loading){
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        }
    }, [user.loading]);

    const userSignup = (e) => {

        e.preventDefault();

        const user = {
            firstName, lastName, email, password
        }

        dispatch(signup(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }

    if(user.loading){
        return <p>Loading...</p>
    }

    return (
        <Layout>
            <Container>
                { user.message }
                <Row style={{ marginTop: '150px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First name"
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input 
                                        label="Last name"
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>

                            <Input
                                label="Email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            { user.error ? <p style={{ color: "red" }}> {user.error} </p> : null }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signup
