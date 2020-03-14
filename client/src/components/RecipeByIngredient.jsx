import React from 'react'
import {
  Form,
} from 'react-bootstrap'
import CustomButtonGroup from './CustomButtonGroup';

export default function RecipeSearch() {

  const addIngredient = () => <Form.Control placeholder='Recipe ingredient' name="recipeIngredient"></Form.Control>


  const buttonGroupButtons = [{
    caption: 'Add another Ingredient',
  }];

  return (
    <>
      <CustomButtonGroup buttons={buttonGroupButtons} />
      <Form.Control placeholder='Recipe ingredient' name="recipeIngredient"></Form.Control>
    </>
  )




}