import React from 'react';
import 
{ Row, 
    Col, 
    ListGroup, 
    Button, 
    Container, 
    Card, 
    Form } from 'react-bootstrap'

function Login () {


    return (
        <Container>
        <Row>
        <Col md={6}>
        <Card className="signup-card">
        <Card.Title className="text-center py-3">Create an Account</Card.Title>
        <Form>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form.Control autoComplete="username" placeholder='@username'></Form.Control>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Form.Control type="password" placeholder="password"></Form.Control>
                </ListGroup.Item>
            </ListGroup>
            <Button className="mx-3 my-3">Log Me In!</Button>
        </Form>
        </Card>
        </Col>
        </Row>
        </Container>
    )


}

export default Login