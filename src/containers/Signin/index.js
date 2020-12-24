import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input'
import { login } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Signin = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email: 'congtunggv@gmail.com',
            password: '123456'
        }

        dispatch(login(user));
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                type="email"
                                placeholder="Email"
                                value=""
                                onChange={() => {}}
                            />

                            <Input
                                label="Password"
                                type="password"
                                placeholder="Password"
                                value=""
                                onChange={() => {}}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signin
