const db = require('../models');

const newFindOne = itemToFind => db.Ingredient.findOne(itemToFind);

const newCreate = itemToCreate => db.Ingredient.create(itemToCreate);

module.exports = {
  newFindOne: findWhat => newFindOne(findWhat),

  newCreate: createWhat => newCreate(createWhat),
};
