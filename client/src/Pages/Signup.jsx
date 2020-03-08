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

function Signup() {


  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card className="signup-card">
            <Card.Title className="text-center py-3">Create an Account</Card.Title>
            <Form>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Form.Control placeholder='@username'></Form.Control>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Form.Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Control placeholder="password"></Form.Control>
                </ListGroup.Item>
              </ListGroup>
              <Button className="mx-3 my-3">Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )


}

export default Signup