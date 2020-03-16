import React, { useState } from 'react'
import {
  Card,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  Button,
} from 'react-bootstrap'
import API from '../utils/API';

export default function RecipeList() {

  const [recipes, setRecipes] = useState([])

  const getRecipesByName = e => {
    e.preventDefault()

    API.getRecipesByName(e.target.recipeName.value)
      .then(results => setRecipes(results.data))
  }

  const preparationTime = (timeInMinutes) => {
    return <Card.Footer className='text-muted'>Ready in {timeInMinutes} minutes </Card.Footer>
  }

  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>Recipes in your Pantry</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={getRecipesByName}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Form.Control placeholder='Recipe name' name="recipeName"></Form.Control>
              </ListGroup.Item>
            </ListGroup>
            <Button type="submit" className="mx-3 my-3">Search</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {recipes.map((recipe, index) => (
          <Col key={index} md={6} data-id={recipe.id}>
            <Card.Header>
              <Card.Title className='text-center'>{recipe.title}</Card.Title>
            </Card.Header>
            <Card.Img src={recipe.image}></Card.Img>
            {recipe.readyInMinutes ? preparationTime(recipe.readyInMinutes) : null}
          </Col>
        ))}
      </Row>
    </Container>
  )
}