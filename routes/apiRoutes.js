const app = require('express').Router();
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');


const pushIngredientToUser = (userId, ingredientId, res) => {
  userController.newAddIngredient(userId, ingredientId)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};


app
  .route('/ingredient/search')
  .get((req, res) => res.send([]));


app
  .route('/user/ingredients/:userId')
  .get((req, res) => {
    userController.newFindOne({ _id: req.params.userId })
      .populate('ingredients.ingredientId')
      .then(data => res.send(data))
      .catch(err => res.send(err));
  });


app
  .route('/pantry/ingredient')
  .post((req, res) => ingredientController.findOneOrCreate({ name: req.body.name }, res));


// create a new user
app
  .route('/user')
  .post((req, res) => userController.create(req.body, res));


// add an ingredient item to the user
app
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

// remove an ingredient item from the user
app
  .route('/user/ingredient/:userId/:ingredientId')
  .delete((req, res) => {
    userController.newRemoveIngredient(req.params.userId, req.params.ingredientId)
      .then(res.sendStatus(200));
  });

module.exports = app;
