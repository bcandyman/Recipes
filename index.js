require('dotenv').config();
require('./config/connection');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { id } = jwt.verify(token, process.env.APP_SECRET);
    req.user = id;
  }
  next();
});

// serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes
app.use(routes);


// Starting the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
