const axios = require('axios');
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');
require('dotenv').config();


const pushIngredientToUser = (userId, ingredientId, res) => {
  userController.newAddIngredient(userId, ingredientId)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};


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
    ingredientSearchTimeout = setTimeout(executeCall, 1000);
  });


  app.get('/api/user/ingredients', (req, res) => {
    userController.newFindOne({ _id: '5e63e43bb450356a2a0cae14' })
      .populate('ingredients.ingredientId')
      .then(data => res.send(data))
      .catch(err => res.send(err));
  });


  app.post('/api/pantry/ingredient', (req, res) => {
    ingredientController.findOneOrCreate({ name: req.body.name }, res);
  });


  // remove an ingredient item from the user
  app.delete('/api/user/ingredient/:userId/:ingredientId', (req, res) => {
    userController.newRemoveIngredient(req.params.userId, req.params.ingredientId)
      .then(res.sendStatus(200));
  });


  // create a new user
  app.post('/api/user', (req, res) => {
    userController.create(req.body, res);
  });


  // add an ingredient item to the user
  app.post('/api/user/ingredient/:userId/:ingredientName', (req, res) => {
    ingredientController.newFindOne({ name: req.params.ingredientName })
      .then(searchedData => {
        if (searchedData === null) {
          // if data was not found in the database
          ingredientController.newCreate({ name: req.params.ingredientName })
            .then(createdData => pushIngredientToUser(req.params.userId, createdData.id, res))
            .catch(err => res.send(err));
        } else {
          // if data was found in the database
          pushIngredientToUser(req.params.userId, searchedData.id, res);
        }
      })
      .catch(err => res.send(err));
  });
};
