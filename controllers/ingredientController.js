const db = require('../models');

const findOne = (itemToFind) => new Promise((resolve, reject) => {
  db.Ingredient.findOne(itemToFind)
    .then(data => resolve(data))
    .catch(err => reject(err));
});

const create = (itemToCreate) => new Promise((resolve, reject) => {
  db.Ingredient.create(itemToCreate)
    .then(data => resolve(data))
    .catch(err => reject(err));
});


module.exports = {
  findOneOrCreate: (req, res) => {
    findOne(req).then(searchedData => {
      if (!searchedData) {
        create(req).then(createdData => res.send(createdData));
      } else {
        res.send(searchedData);
      }
    });
  },

  findOne: (req, res) => {
    findOne(req).then(searchedData => res.send(searchedData));
  },
};
