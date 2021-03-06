import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import RecipeByName from '../components/RecipeByName';
import RecipeByIngredient from '../components/RecipeByIngredient';
import RecipeByPantry from '../components/RecipeByPantry';
import SearchBar from '../components/CustomButtonGroup';
import { useHistory } from 'react-router-dom';

function Recipes({ searchBy, userId, onHandleUserActivate }) {

  const history = useHistory();
  const [queryType, setQueryType] = useState('')

  const handleOnClick = e => {
    setQueryType(e.target.value);
    history.push(`/recipes/search/${e.target.value}`)
  }

  const searchBarButtons = [
    {
      caption: 'By Name',
      value: 'name',
    },
    {
      caption: 'By Ingredient',
      value: 'ingredients',
    },
    {
      caption: 'By Pantry',
      value: 'pantry',
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
      {queryType === 'name' ? <RecipeByName /> : null}
      {queryType === 'ingredients' ? <RecipeByIngredient /> : null}
      {queryType === 'pantry' ? <RecipeByPantry userId={userId} onHandleUserActivate={onHandleUserActivate} /> : null}
    </Container>
  )
}

export default Recipes;
