const db = require('../models');

const newFindOne = itemToFind => db.Recipe.findOne(itemToFind);

const newCreate = itemToCreate => db.Recipe.create(itemToCreate);

module.exports = {
    newFindOne: findWhat => newFindOne(findWhat),

    newCreate: createWhat => newCreate(createWhat),
};
