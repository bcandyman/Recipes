const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');
require('dotenv').config();


const pushIngredientToUser = (userId, ingredientId, res) => {
  userController.newAddIngredient(userId, ingredientId)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};


module.exports = app => {
  // app.post('/api/user/create', (req, res) => {
  //   res.send('userId');
  // });


  app.post('/api/user/signup', async (req, res) => {

    // const email = req.body.email.toLowerCase();

    // //hash our password
    bcrypt.hash(req.body.password, 10).then(function(data) { });
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: encryptedPassword,
    };

    // //create the user in the database
    const user = userController.create({ data })
      .then(incomingData => console.log(incomingData.id));

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    res.send('user');



  });







  app.get('/api/ingredient/search/:ingredientName', (req, res) => {
    const url = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${req.params.ingredientName}&number=5&apiKey=`;
    const apiKey = process.env.SPOONACULAR_KEY;
    axios.get(url + apiKey)
      .then(response => res.send(response.data));
  });

  app.get('/api/ingredient/search', (req, res) => res.send([]));

  app.get('/api/user/ingredients/:userId', (req, res) => {
    userController.newFindOne({ _id: req.params.userId })
      .populate('ingredients.ingredientId')
      .then(data => res.send(data))
      .catch(err => res.send(err));
  });

  app.post('/api/pantry/ingredient', (req, res) => {
    ingredientController.findOneOrCreate({ name: req.body.name }, res);
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

  // remove an ingredient item from the user
  app.delete('/api/user/ingredient/:userId/:ingredientId', (req, res) => {
    userController.newRemoveIngredient(req.params.userId, req.params.ingredientId)
      .then(res.sendStatus(200));
  });
};
