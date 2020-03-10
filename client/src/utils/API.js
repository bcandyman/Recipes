import axios from "axios";

export default {

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
};
