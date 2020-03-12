import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import API from '../utils/API';
import {
  Row,
  Col,
  ListGroup,
  Button,
  Container,
  Card,
  Form,
  Spinner
} from 'react-bootstrap'

function Pantry() {

  // contains ingredients returned from API from searching for new ingredients
  const [ingredients, setIngredients] = useState([]);
  // contains ingredients owned by the user
  const [userIngredients, setUserIngredients] = useState([]);
  // used as a trigger update user pantry and avoid loop from updating userIngredients within useEffect hook.
  const [updatedItems, setUpdatedItems] = useState(0);
  const [text, setText] = useState('');
  const [search] = useDebounce(text, 2000);

  useEffect(() => {
    API.getUserIngredients('userId')
      .then(res => {
        setUserIngredients(res.data.ingredients)
      })
  }, [updatedItems]);

  useEffect(() => {
    API.getIngredients(search)
      .then(res => setIngredients(res.data));
  }, [search]);

  const handleOnKeyUp = e => setText(e.target.value);

  const handleOnAdd = e => {
    if (userIngredients.filter(item => item.ingredientId.name === e.target.value).length > 0) {
      alert('This item is already in your inventory!')
    }
    else {
      API.addUserIngredient('5e684ff780c3e403d4f4a2d6', e.target.value)
        .then(setUpdatedItems(updatedItems + 1));
    }
  };

  const handleOnRemove = e => {
    API.removeUserIngredient('5e684ff780c3e403d4f4a2d6', e.target.value)
      .then(setUpdatedItems(updatedItems + 1));
  };

  return (
    <Container className="Pantry">
      <Row>
        <Col md={6}>
          <Card className="ingredient-search">
            <Card.Title className="text-center py-3">
              Add Ingredients 
            </Card.Title>       
            <Spinner animation="border" variant="warning" />
            <Form.Control isValid onKeyUp={handleOnKeyUp} placeholder='start typing to find your ingredient' />
            <ListGroup>
              {ingredients!= null?
              ingredients.map((val, index) => (
                <ListGroup.Item key={index}>
                  <Button size="sm" variant="success" className='mr-3' name='searched-ingredient' value={val.name} onClick={handleOnAdd}>✚</Button>
                  {val.name}
                </ListGroup.Item>
              )): null}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="ingredient-display">
            <Card.Title className="text-center py-3">
              My Ingredients
                </Card.Title>
            <ListGroup>
              {userIngredients!= null? 
              userIngredients.map((val, index) => (
                <ListGroup.Item key={index}>
                  <Button size="sm" variant="danger" className='mr-3' name='searched-ingredient' value={val._id} onClick={handleOnRemove}>-</Button>
                  {val.ingredientId.name}
                </ListGroup.Item>
              )):null}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Pantry;
