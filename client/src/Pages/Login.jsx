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

function Login() {

  const handleOnSubmit = e => {
    e.preventDefault()


    console.log(e.target.userName.value);
    console.log(e.target.password.value);

    API.getUser(
      e.target.userName.value,
      e.target.password.value
    ).then(data => {
      console.log('data.data.id')
      // onHandleUserActivate(data.data.id)
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
                  <Form.Control autoComplete="username" placeholder='@username' name="userName"></Form.Control>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Control type="password" placeholder="password" name="password"></Form.Control>
                </ListGroup.Item>
              </ListGroup>
              <Button type="submit" className="mx-3 my-3">Log Me In!</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )


}

export default Login