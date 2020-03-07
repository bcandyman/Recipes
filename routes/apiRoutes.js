const axios = require('axios');
// const db = require('../models');
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');
require('dotenv').config();


let ingredientSearchTimeout = {};

module.exports = app => {
  app.post('/api/user/create', (req, res) => {
    res.send('userId');
  });

  app.get('/api/ingredient/search/:ingredientName', (req, res) => {
    const executeCall = () => {
      const url = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${req.params.ingredientName}&number=5&apiKey=`;
      const apiKey = process.env.SPOONACULAR_KEY;
      axios.get(url + apiKey).then(response => {
        res.send(response.data);
      });
    };
    clearTimeout(ingredientSearchTimeout);
    ingredientSearchTimeout = setTimeout(executeCall, 500);
  });



  
  app.post('/api/pantry/ingredient', (req, res) => {
    ingredientController.findOneOrCreate({ name: req.body.name }, res);
  });

  app.post('/api/user', (req, res) => {
    userController.create(req.body, res);
  });

  app.post('/api/user/ingredient', (req, res) => {
    console.log(req.body.name);
    ingredientController.findOneOrCreate({ name: req.body.name }, res);
    //.then(//data => {
    //userController.addIngredient(data, res);
    //res.send('finished!');
    // }
    //);
    // userController.addIngredient(req.body, res);
  });
};
