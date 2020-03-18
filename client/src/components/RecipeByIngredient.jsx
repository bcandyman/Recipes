import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Form,
  Row
} from 'react-bootstrap'
import RecipeList from './RecipeList';
import CustomButtonGroup from './CustomButtonGroup';
import API from '../utils/API';
import { useHistory, useParams } from 'react-router-dom';

export default function RecipeSearch() {

  const addIngredient = () => <Form.Control placeholder='Recipe ingredient' name="recipeIngredient"></Form.Control>

  const buttonGroupButtons = [{
    caption: 'Add another Ingredient',
  }];
  const { ingredients } = useParams();
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [recipeNameState, setRecipeNameState] = useState([]);


  const getRecipes = e => {
    e.preventDefault();
    history.push(`/recipes/search/ingredients/${e.target.recipeIngredient.value}`);
    setRecipeNameState(e.target.recipeIngredient.value);
  };


  useEffect(() => {
    API.getRecipesByIngredient(ingredients)
      .then(results => setRecipes(results.data))
      .catch(err => console.log(err))
  }, [recipeNameState]);

  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={getRecipes}>
            <CustomButtonGroup buttons={buttonGroupButtons} />
            <Form.Control placeholder='Recipe ingredient' name="recipeIngredient"></Form.Control>
            <Button type="submit" className="mx-3 my-3">Search</Button>
          </Form>
        </Col>
      </Row >
      <RecipeList recipes={recipes} />
    </>
  )
};
