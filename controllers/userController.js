const db = require('../models');

module.exports = {
  create: (userData) => db.User.create(userData.data),

  newAddIngredient: (userId, ingredientId) => db.User.findOneAndUpdate(
    { _id: userId },
    { $push: { ingredients: { ingredientId } } },
  ),

  newRemoveIngredient: (userId, ingredientId) => db.User.updateOne(
    { _id: userId },
    { $pull: { ingredients: { _id: ingredientId } } },
  ),

  newFindOne: findWhat => db.User.findOne(findWhat),
};
