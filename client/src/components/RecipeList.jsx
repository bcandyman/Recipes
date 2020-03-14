import React from 'react'
import {
  Card,
  Row,
  Col,
} from 'react-bootstrap'

export default function RecipeList({ recipes }) {

  const preparationTime = (timeInMinutes) => {
    return <Card.Footer className='text-muted'>Ready in {timeInMinutes} minutes</Card.Footer>
  }

  return (
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
  )
}