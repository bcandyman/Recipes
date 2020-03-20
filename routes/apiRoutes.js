const app = require('express').Router();
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');


const pushIngredientToUser = (userId, ingredientId, res) => {
  userController.newAddIngredient(userId, ingredientId)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};


// app // route is used for autopopulate while searching for ingredients
//   .route('/ingredient/search')
//   .get((req, res) => res.send([]));


app // grabs user information along with user's populated ingredient list
  .route('/user/ingredients/:userId')
  .get((req, res) => {
    userController.newFindOne({ _id: req.params.userId })
      .populate('ingredients.ingredientId')
      .then(data => res.send(data))
      .catch(err => res.send(err));
  });


app // creates a new ingredient item within the ingredients collection
  .route('/pantry/ingredient')
  .post((req, res) => ingredientController.findOneOrCreate({ name: req.body.name }, res));


app // creates a new user profile
  .route('/user')
  .post((req, res) => userController.create(req.body, res));


app // add an ingredient item to the user's collection
  .route('/user/ingredient/:userId/:ingredientName')
  .post((req, res) => {
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


app // remove an ingredient item from the user's collection
  .route('/user/ingredient/:userId/:ingredientId')
  .delete((req, res) => {
    userController.newRemoveIngredient(req.params.userId, req.params.ingredientId)
      .then(res.sendStatus(200));
  });

module.exports = app;
