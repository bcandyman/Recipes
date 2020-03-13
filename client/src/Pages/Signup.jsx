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

function Signup({ onHandleUserActivate }) {

  const handleOnSubmit = e => {
    e.preventDefault()

    API.createNewUser({
      userName: e.target.userName.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value
    }).then(data => {
      console.log('data.data.id')
      onHandleUserActivate(data.data.id)
    });
  }

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