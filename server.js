require('dotenv').config();
require('./config/connection');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
require('./routes/apiRoutes')(app);


// Starting the server
app.listen(PORT, () => console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));

module.exports = app;
