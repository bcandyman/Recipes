import React, { useEffect, useState } from 'react'
import RecipeList from './RecipeList';
import API from '../utils/API';
import AuthComponent from '../components/AuthenticationComponent'

export default function RecipeSearch({ userId, onHandleUserActivate }) {

  const [userIngredients, setUserIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    if (userId) {
      API.getUserIngredients(userId)
        .then(res => setUserIngredients(res.data.ingredients))
        .catch(err => console.log(err));
    }
  }, [userId]);


  useEffect(() => {
    const parsedIngredients = userIngredients.map(val => val.ingredientId.name
    ).join(',+');
    if (parsedIngredients) {
      API.getRecipesByIngredient(parsedIngredients)
        .then(results => setRecipes(results.data))
        .catch(err => console.log(err))
    };
  }, [userIngredients]);


  return (
    <>
      <AuthComponent onHandleUserActivate={onHandleUserActivate} userId={userId}>
        <h1>SEARCH BY USER PANTRY</h1>
        <RecipeList recipes={recipes} />
      </AuthComponent>
    </>
  )
};
