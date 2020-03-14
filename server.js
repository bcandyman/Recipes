require('dotenv').config();
require('./config/connection');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

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


// Routes
require('./routes/apiRoutes')(app);


// Starting the server
app.listen(PORT, () => console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));
