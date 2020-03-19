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

function Signup({ onHandleUserActivate }) {

  const history = useHistory();

  const handleOnSubmit = e => {
    e.preventDefault()

    const userData = {
      userName: e.target.userName.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value
    }

    if (!userData.userName || !userData.firstName || !userData.lastName || !userData.password) {
      alert('All fields must be populated')
      return
    }

    API.createNewUser(userData).then(data => {
      if (data.data.id) {
        onHandleUserActivate(data.data.id);
        history.push('/pantry');
      }
    });
  }

  return (
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }}>
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
                  <Form.Control type="password" name='password' placeholder="password"></Form.Control>
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