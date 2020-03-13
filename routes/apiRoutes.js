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

  app.get('/api/user/authenticate', (req, res) => res.json(req.user));







  app.post('/api/user/login/:userName/:password', async (req, res) => {
    console.log('99999999999999999999');
    console.log(req.params.userName);
    console.log(req.params.password);
    console.log('))))))))))))))(((((((((((((((');

    userController.newFindOne({ userName: req.params.userName })
      .then(incomingData => {
        console.log(incomingData);


        // const user = await db.User.findOne({
        // where: {
        // email: req.body.email
        // }
        // });

        if (!incomingData.userName) {
          res.json('NO USER FOUND WITH THAT EMAIL');
        }

        const valid = bcrypt.compare(req.params.password, incomingData.password);

        if (!valid) {
          res.json('INCORRECT PASSWORD ENTERED');
        }

        // //create our cookie
        const token = jwt.sign({ id: incomingData.id }, process.env.APP_SECRET);

        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 365,
        });

        res.json('user');
      });
  });










  app.post('/api/user/signup', async (req, res) => {
    // const email = req.body.email.toLowerCase();

    // //hash our password
    // bcrypt.hash(req.body.password, 10).then((data) => { });
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: encryptedPassword,
    };

    // // //create the user in the database
    userController.create({ data })
      .then(incomingData => {
        const token = jwt.sign({ id: incomingData.id }, process.env.APP_SECRET);
        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        res.json({ id: incomingData.id });
      })
      .catch(err => res.send(err));
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
