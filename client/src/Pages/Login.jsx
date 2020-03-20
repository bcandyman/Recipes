import React from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

  const handleOnSubmit = e => {
    e.preventDefault()
    API.getUser(
      e.target.userName.value,
      e.target.password.value
    ).then(data => history.push('/pantry'));
  }

  return (
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
          <Card className="signup-card">
            <Card.Title className="text-center py-3">Login to your Account</Card.Title>
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