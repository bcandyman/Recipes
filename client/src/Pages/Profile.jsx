import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from 'react-bootstrap'

export default function Profile () {
    return(
        <Card>
            <Row>
                <Col md={6}><Card.Title className="text-center">Lakshdeep Bajwa</Card.Title></Col>
                <Col md={6}>
                    <Container>
                        <img src="https://avatars0.githubusercontent.com/u/54950780?s=460&v=4" alt="user profile" height="150px" />
                    </Container>
                </Col>
            </Row>
        </Card>
    )
}