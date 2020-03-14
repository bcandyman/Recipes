import React, { useState } from 'react';
import {
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  Button,
} from 'react-bootstrap';
import API from '../utils/API';
import RecipeList from '../components/RecipeList';
import RecipeByName from '../components/RecipeByName';
import RecipeByIngredient from '../components/RecipeByIngredient';
import SearchBar from '../components/CustomButtonGroup';

export default function RecipeSearch() {

  const [queryType, setQueryType] = useState('name')
  const [recipes, setRecipes] = useState([])

  const handleOnClick = e => {
    setQueryType(e.target.value);
    setRecipes([]);
  }

  const getRecipes = e => {
    e.preventDefault()

    switch (queryType) {
      case 'name':
        API.getRecipesByName(e.target.recipeName.value)
          .then(results => setRecipes(results.data))
          .catch(err => console.log(err))
        break;

      case 'ingredient':
        API.getRecipesByIngredient(e.target.recipeIngredient.value)
          .then(results => setRecipes(results.data))
          .catch(err => console.log(err))
        break;

      default:
    }
  }


  const searchBarButtons = [
    {
      caption: 'By Name',
      value: 'name',
    },
    {
      caption: 'By Ingredient',
      value: 'ingredient',
    },
  ]

  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>Recipes in your Pantry</h1>
          <SearchBar className='mb-3' buttons={searchBarButtons} handleOnClick={handleOnClick} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={getRecipes}>
            <ListGroup variant="flush">
              {queryType === 'name' ? <RecipeByName /> : null}
              {queryType === 'ingredient' ? <RecipeByIngredient /> : null}
            </ListGroup>
            <Button type="submit" className="mx-3 my-3">Search</Button>
          </Form>
        </Col>
      </Row>
      <RecipeList recipes={recipes} />
    </Container>
  )
}