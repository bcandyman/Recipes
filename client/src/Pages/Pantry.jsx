import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import 
{ Row, 
  Col, 
  ListGroup, 
  Button, 
  Container, 
  Card,
  Form 
} from 'react-bootstrap'
import { useDebounce } from 'use-debounce'

function Pantry() {

  const [ingredients, setIngredients] = useState([])
  const [text, setText] = useState('')
  const [search] = useDebounce(text, 2000)

  useEffect(() => {
    console.log('Get Ingredients from the Database');
    API.getIngredients(search).then(res => {
      setIngredients(res.data)
    })
  }, [search]);

  const handleChange = e => {
    setText(e.target.value)
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
              <Form.Control isValid onChange={handleChange} placeholder='start typing to find your ingredient' />
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
