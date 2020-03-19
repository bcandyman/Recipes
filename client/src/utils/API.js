import axios from "axios";

export default {

  createNewUser: (userData) => {
    return axios.post('/api/user/signup', userData);
  },

  getUser: (userName, password) => {
    return axios.post(`/api/user/login/${userName}/${password}`);
  },

  logoutUser: () => {
    return axios.get('/api/user/logout');
  },

  getIngredients: (ingredientName) => {
    return axios.get(`/api/ingredient/search/${ingredientName}`)
  },
  

  getUserIngredients: (userId) => {
    return axios.get(`api/user/ingredients/${userId}`);
  },

  removeUserIngredient: (userId, ingredientId) => {
    return axios.delete(`api/user/ingredient/${userId}/${ingredientId}`);
  },

  addUserIngredient: (userId, ingredientName) => {
    return axios.post(`/api/user/ingredient/${userId}/${ingredientName}`)
  },

  // Route to save recipeId to user's collection
  addUserRecipe: (userId, recipeId) => {
    return axios.get(`/api/user/recipe/${userId}/${recipeId}`)
  },

  getRecipesByName: (name) => {
    return axios.get(`/spoonacular/recipeByName/${name}`)
  },

  getRecipesByIngredient: (ingredient) => {
    return axios.get(`/spoonacular/recipeByIngredient/${ingredient}`)
  },

  getRecipesDetails: (recipeId) => {
    return axios.get(`/spoonacular/recipe/details/${recipeId}`)
  },
};
