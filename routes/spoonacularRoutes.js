const app = require('express').Router();
const axios = require('axios');
require('dotenv').config();


const getSpoonacular = (endPoints) => {
  return axios.get(`https://api.spoonacular.com${endPoints}&apiKey=${process.env.SPOONACULAR_KEY}`)
};

app
  .route('/spoonacular/recipe/:name')
  .get((req, res) => {
    getSpoonacular(`/recipes/search?query=${req.params.name}&number=2&instructionsRequired=true`)
      .then(response => {
        const updatedData = response.data.results.map(val => {
          val.image = response.data.baseUri + val.imageUrls[0];
          return val;
        });
        res.send(updatedData);
      });
  });


app
  .route('/ingredient/search/:ingredientName')
  .get((req, res) => {
    getSpoonacular(`/food/ingredients/autocomplete?query=${req.params.ingredientName}&number=5`)
      .then(response => res.send(response.data));
  });

module.exports = app;
