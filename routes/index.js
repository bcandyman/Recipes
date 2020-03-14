const app = require('express').Router();

const userAuthenticationRoutes = require('./userAuthentication');
const apiRoutes = require('./apiRoutes');

app.use('/api/user', userAuthenticationRoutes);
app.use('/api', apiRoutes);

module.exports = app;
