import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import {
  Row,
  Col,
  ListGroup,
  Button,
  Container,
  Card,
  Form
} from 'react-bootstrap'
import './Pantry.css'

function Pantry() {

  const [ingredients, setIngredients] = useState([])
  const [userIngredients, setUserIngredients] = useState([])

  useEffect(() => {
    API.getUserIngredients('userId')
      .then(res => setUserIngredients(res.data.ingredients))
  }, []);

  const handleOnKeyUp = e => {
    API.getIngredients(e.target.value)
      .then(res => setIngredients(res.data))
  };

  const handleOnAdd = e => {
    console.log(e.target.value)
    API.addUserIngredient('5e63e43bb450356a2a0cae14', e.target.value)
      .then(res => console.log(res)
      )
  };

  const handleOnRemove = e => {
    API.removeUserIngredient('5e63e43bb450356a2a0cae14', e.target.value)
      .then(res => console.log(res)
      )
  };

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
                  <Button size="sm" variant="success" className='mr-3' name='searched-ingredient' value={val.name} onClick={handleOnAdd}>✚</Button>
                  {val.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="ingredient-display">
            <Card.Title className="text-center py-3">
              My Ingredients
                </Card.Title>
            <ListGroup>
              {userIngredients.map((val, index) => (
                <ListGroup.Item key={index}>
                  <Button size="sm" variant="danger" className='mr-3' name='searched-ingredient' value={val._id} onClick={handleOnRemove}>-</Button>
                  {val.ingredientId.name}
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
