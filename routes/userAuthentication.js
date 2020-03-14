const app = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');

const signCookie = (userId, res) => new Promise((resolve, reject) => {
  const token = jwt.sign({ id: userId }, process.env.APP_SECRET);

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  resolve(res);
});


app
  .route('/authenticate')
  .get((req, res) => res.json(req.user));


app
  .route('/login/:userName/:password')
  .post((req, res) => {
    userController.newFindOne({ userName: req.params.userName })
      .then(incomingData => {
        if (!incomingData) {
          res.json('NO USER FOUND WITH THAT EMAIL');
        }

        bcrypt.compare(req.params.password, incomingData.password)
          .then(result => {
            if (result) {
              signCookie(incomingData.id, res)
                .then(() => res.sendStatus(200))
                .catch(err => console.log(err));
            } else {
              res.json('INCORRECT PASSWORD ENTERED');
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });


app
  .route('/signup')
  .post(async (req, res) => {
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
        signCookie(incomingData.id, res).then(() => res.json({ id: incomingData.id }));
      })
      .catch(err => res.send(err));
  });

app.route('/logout')
  .get((req, res) => {
    res.clearCookie('token');
    res.json('logged out user');
  });

module.exports = app;
