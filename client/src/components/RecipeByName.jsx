import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Form,
  ListGroup,
  Row
} from 'react-bootstrap'
import RecipeList from './RecipeList';
import API from '../utils/API';
import { useHistory, useParams } from 'react-router-dom';


export default function RecipeSearchByName() {

  const { name } = useParams();
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [recipeNameState, setRecipeNameState] = useState([]);


  const getRecipes = e => {
    e.preventDefault();
    history.push(`/recipes/search/name/${e.target.recipeName.value}`);
    setRecipeNameState(e.target.recipeName.value);
  };


  useEffect(() => {
    API.getRecipesByName(name)
      .then(results => setRecipes(results.data))
      .catch(err => console.log(err));
  }, [recipeNameState]);


  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={getRecipes}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Form.Control placeholder='Recipe name' name="recipeName"></Form.Control>
              </ListGroup.Item>
            </ListGroup>
            <Button type="submit" className="mx-3 my-3">Search</Button>
          </Form>
        </Col>
      </Row >
      <RecipeList recipes={recipes} />
    </>
  )
};
