const axios = require('axios');
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');
require('dotenv').config();


const pushIngredientToUser = (userId, ingredientId, res) => {
  userController.newAddIngredient(userId, ingredientId)
    .then(res.send('savedIngredient'))
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
    ingredientSearchTimeout = setTimeout(executeCall, 500);
  });









  


  app.post('/api/pantry/ingredient', (req, res) => {
    ingredientController.findOneOrCreate({ name: req.body.name }, res);
  });

  app.post('/api/user', (req, res) => {
    userController.create(req.body, res);
  });

  app.post('/api/user/ingredient', (req, res) => {
    ingredientController.newFindOne({ name: req.body.name })
      .then(searchedData => {
        if (searchedData === null) {
          // if data was not found in the database
          ingredientController.newCreate({ name: req.body.name })
            .then(createdData => pushIngredientToUser('5e63e43bb450356a2a0cae14', createdData.id, res))
            .catch(err => res.send(err));
        } else {
          // if data was found in the database
          pushIngredientToUser('5e63e43bb450356a2a0cae14', searchedData.id, res);
        }
      })
      .catch(err => res.send(err));
  });
};
