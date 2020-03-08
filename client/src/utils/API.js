import axios from "axios";

export default {

  getIngredients: (ingredientName) => {
    return axios.get(`/api/ingredient/search/${ingredientName}`)
  },
};
