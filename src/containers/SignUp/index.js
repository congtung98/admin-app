import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signup = () => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First name"
                                        type="text"
                                        placeholder="First Name"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input 
                                        label="Last name"
                                        type="text"
                                        placeholder="Last Name"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </Col>
                            </Row>

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

export default Signup
