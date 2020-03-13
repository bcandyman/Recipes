import axios from "axios";

export default {

  getIngredients: (ingredientName) => {
    return axios.get(`/api/ingredient/search/${ingredientName}`)
  },

  getUserIngredients: (userId) => {
    return axios.get('api/user/ingredients');
  },

  removeUserIngredient: (userId, ingredientId) => {
    return axios.delete(`api/user/ingredient/${userId}/${ingredientId}`);
  },

  addUserIngredient: (userId, ingredientName) => {
    return axios.post(`/api/user/ingredient/${userId}/${ingredientName}`)
  },

  getRecipeFromSpoonacular: (query) => {
    return axios.get(`https://api.spoonacular.com/recipes/search?query=${query}?&number=3&apiKey=0c7f231678414f3191bdcda45194a6b8`)
  },

  getRandomRecipe: (howManyToReturn) => {
    return axios.get(`https://api.spoonacular.com/recipes/random?&number=${howManyToReturn}&apiKey=82ed4bea162844219fb3b560a1f3008c`)
  },
};
