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

  const getDetails = e => {
    console.log('====================================');
    console.log(e.currentTarget.getAttribute('data-id'));
    console.log('====================================');
  }

  return (
    <Row>
      {recipes.map((recipe, index) => (
        <Col onClick={getDetails} key={index} md={6} data-id={recipe.id}>
          <div>
            <Card.Header>
              <Card.Title className='text-center'>{recipe.title}</Card.Title>
            </Card.Header>
            <Card.Img src={recipe.image}></Card.Img>
            {recipe.readyInMinutes ? preparationTime(recipe.readyInMinutes) : null}
          </div>
        </Col>
      ))}
    </Row>
  )
}