import React from 'react';
import {
  Row,
  Col,
  ListGroup,
  Button,
  Container,
  Card,
  Form
} from 'react-bootstrap'
import API from '../utils/API';

function Signup() {

  const handleOnSubmit = e => {
    e.preventDefault()

    console.log(e.target.userName.value);
    console.log(e.target.userName.value);
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.password.value);

    API.createNewUser(
      e.target.userName.value,
      e.target.firstName.value,
      e.target.lastName.value,
      e.target.password.value,
    ).then(console.log('ok'))
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card className="signup-card">
            <Card.Title className="text-center py-3">Create an Account</Card.Title>
            <Form onSubmit={handleOnSubmit}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Form.Control name='userName' placeholder='@username'></Form.Control>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Row>
                    <Col>
                      <Form.Control name='firstName' placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control name='lastName' placeholder="Last name" />
                    </Col>
                  </Form.Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Control name='password' placeholder="password"></Form.Control>
                </ListGroup.Item>
              </ListGroup>
              <Button type="submit" className="mx-3 my-3">Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )


}

export default Signup