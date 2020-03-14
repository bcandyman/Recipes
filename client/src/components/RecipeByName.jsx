import React from 'react'
import {
  Form,
  ListGroup,
} from 'react-bootstrap'

export default function RecipeSearch() {

  return (
    <ListGroup.Item>
      <Form.Control placeholder='Recipe name' name="recipeName"></Form.Control>
    </ListGroup.Item>
  )
}