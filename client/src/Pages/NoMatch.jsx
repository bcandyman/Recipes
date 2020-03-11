import React from "react";
import { Row, Col, Container, Jumbotron } from 'react-bootstrap'

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Maybe you're looking for your Pantry?...</h1>
            <h1>
              <a href="/pantry">
                <img alt="colored pantry" src="https://image.flaticon.com/icons/svg/1606/1606731.svg" height="100px"></img>
              </a>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
