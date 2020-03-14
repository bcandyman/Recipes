const app = require('express').Router();

const userAuthenticationRoutes = require('./userAuthentication');
const apiRoutes = require('./apiRoutes');
const spoonacularRoutes = require('./spoonacularRoutes');

app.use('/api/user', userAuthenticationRoutes);
app.use('/api', apiRoutes);
app.use('/api', spoonacularRoutes);

module.exports = app;
