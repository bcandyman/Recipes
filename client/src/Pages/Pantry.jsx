import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import 
{ Row, 
  Col, 
  ListGroup, 
  Button, 
  Container, 
  Card, 
  Form } from 'react-bootstrap'
import './Pantry.css'

function Pantry() {

  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    console.log('Get Ingredients from the Database');
  }, []);

  const handleOnKeyUp = e => {
    API.getIngredients(e.target.value).then(res => {
      setIngredients(res.data)
    })
  };

  const handleOnClick = e => {
    console.log(e.target.value)

    // console.log('oncliclk');
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Container className="Pantry">
      <Row>
        <Col md={6}>
          <Card className="ingredient-search">
              <Card.Title className="text-center py-3">
                Add Ingredients
              </Card.Title>
              <Form.Control isValid onKeyUp={handleOnKeyUp} placeholder='start typing to find your ingredient' />
              {/* <input className='w-100' onKeyUp={handleOnKeyUp} placeholder='start typing to find your ingredient' /> */}
              <ListGroup>
                {ingredients.map((val, index) => (
                  <ListGroup.Item key={index}>
                    <Button size="sm" variant="success" className='mr-3' name='searched-ingredient' value={val.name} onClick={handleOnClick}>✚</Button>
                    {val.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="ingredient-display">
                <Card.Title  className="text-center py-3">
                  My Ingredients
                </Card.Title>
                <ListGroup>
                  {data.map((val, index) => (
                    <ListGroup.Item key={index}>
                      {val}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Pantry;
