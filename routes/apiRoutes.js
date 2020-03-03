const axios = require('axios');
require('dotenv').config();

module.exports = app => {
  app.post('/api/user/create', (req, res) => {
    res.send('userId');
  });

  app.get('/api/ingredient/search', (req, res) => {
    const url = 'https://api.spoonacular.com/food/ingredients/autocomplete';
    const query = `?query=${req.query.ingredientName}`;
    const numResults = '&number=5';
    const apiKey = `&apiKey=${process.env.SPOONACULAR_KEY}`;
    axios.get(url + query + numResults + apiKey).then(response => {
      res.send(response.data);
    });
  });

  app.post('/api/pantry/new', (req, res) => {
    res.send({ name: req.body.name });
  });
};
