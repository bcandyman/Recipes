const axios = require('axios');

const assembleIngredientUrl = data => {
  let ingredientString = '';
  data.forEach((val, ind) => {
    if (ind !== 0) {
      ingredientString += ',';
    }
    ingredientString += val.name;
  });
  return ingredientString;
};

// const renderOptions = {
//   title: "title",
//   header: "header",
//   showSearchByName: false,
//   showSearchByIngredients: false,
//   showNavBar: false,
//   excludeSearchByName; false,
//   excludeSearchByPantry: false
// };

// !!THIS ARRAY TO BE DELETED ONCE SQL DATABASE IS SET UP!!
// !!USE ONLY FOR TESTING PURPOSES!!
const dummyPantryData = [
  {
    id: '2',
    name: 'egg',
    createdAt: '2020-01-16T22:36:17.000Z',
    updatedAt: '2020-01-16T22:36:17.000Z',
  },
  {
    id: '4',
    name: 'milk',
    createdAt: '2020-01-16T22:36:17.000Z',
    updatedAt: '2020-01-16T22:36:17.000Z',
  },
  {
    id: '7',
    name: 'flour',
    createdAt: '2020-01-16T22:36:17.000Z',
    updatedAt: '2020-01-16T22:36:17.000Z',
  },
  {
    id: '9',
    name: 'apple juice',
    createdAt: '2020-01-16T22:36:17.000Z',
    updatedAt: '2020-01-16T22:36:17.000Z',
  },
  {
    id: '10',
    name: 'butter',
    createdAt: '2020-01-16T22:36:17.000Z',
    updatedAt: '2020-01-16T22:36:17.000Z',
  },
  {
    id: '12',
    name: 'broccoli',
    createdAt: '2020-01-16T22:36:17.000Z',
    updatedAt: '2020-01-16T22:36:17.000Z',
  },
];

module.exports = app => {
  // This is the route to log in the user.
  // app.get('/login', (req, res) => {
  //   res.render('index', { title: 'Login' });
  // });

  // Redirect '/' route to '/login'
  // app.get('/', (req, res) => {
  //   res.redirect('/login');
  // });

  // This route should display all ingredients of the user
  // app.get('/pantry/manage', (req, res) => {
  //   res.render('pantry', {
  //     title: 'Pantry',
  //     showNavBar: true,
  //     data: dummyPantryData,
  //   });
  // });

  // This route should display recipes that the user currently has in their database
  app.get('/recipes/pantry', (req, res) => {
    const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
    const ingredients = assembleIngredientUrl(dummyPantryData);
    const url2 = `&number=5&instructionsRequired=true&apiKey=${process.env.SPOONACULAR_KEY}`;
    axios.get(url + ingredients + url2).then((response) => {
      const { data } = response;
      res.render('recipes', {
        title: 'Recipes',
        header: 'Search by Pantry Ingredients',
        showNavBar: true,
        excludeSearchByPantry: 'true',
        data,
      });
    });
  });

  // this route should update the quantity of an ingredient item in the database
  // app.put('/pantry/ingredient/update', (req, res) => {
  //   setTimeout(() => {
  //     res.send({ redirect: '/pantry/manage' });
  //   }, 1000);
  // });

  // this route should remove an ingredient item in the database
  // app.delete('/pantry/ingredient/remove', (req, res) => {
  //   const itemId = req.body.ingredientId;
  //   setTimeout(() => {
  //     res.send({ redirect: '/pantry/manage' });
  //   }, 1000);
  // });

  // This route should display recipes that were searched by the user
  // app.get('/recipes/search/name/:recipeName?', (req, res) => {
  //   const { recipeName } = req.params;
  //   const url = `https://api.spoonacular.com/recipes/search?query=${recipeName}&number=2&instructionsRequired=true&apiKey=${process.env.SPOONACULAR_KEY}`;
  //   axios.get(url).then(response => {
  //     // Prepend baseUrl to image url.
  //     const baseImageUrl = response.data.baseUri;
  //     response.data.results.forEach((val, ind) => {
  //       const imagePath = response.data.results[ind].image;
  //       response.data.results[ind].image = baseImageUrl + imagePath;
  //     });

  //     const data = response.data.results;
  //     res.render('recipes', {
  //       title: 'Recipes',
  //       header: 'Search by Recipe Name',
  //       showNavBar: true,
  //       showSearchByName: true,
  //       excludeSearchByName: true,
  //       data: data
  //     });
  //   });
  // });

  // this route displays all details of a recipe
  app.get('/recipe/details/:id', (req, res) => {
    const recipeId = req.params.id;
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.SPOONACULAR_KEY}`;
    axios.get(url).then(response => {
      const { data } = response;
      res.render('recipeDetails', {
        title: data.title,
        header: `${data.title} recipe details`,
        data,
      });
    });
  });

  // This route should display recipes that were searched by ingredients
  app.get('/recipes/search/ingredients/:ingredients?', (req, res) => {
    const renderPage = data => {
      res.render('recipes', {
        title: 'Recipes',
        header: 'Search by Recipe Ingredient',
        showNavBar: true,
        showSearchByIngredient: true,
        excludeSearchByIngredients: true,
        data,
      });
    };

    const { ingredients } = req.params;
    if (ingredients) {
      const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
      const url2 = `&number=5&instructionsRequired=true&apiKey=${process.env.SPOONACULAR_KEY}`;
      axios.get(url + ingredients + url2).then(response => {
        const { data } = response;
        renderPage(data);
      });
    } else {
      renderPage();
    }
  });

  // app.get('/*', (req, res) => {
  //   res.render('404');
  // });
};
