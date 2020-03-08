const db = require('../models');

module.exports = {
  create: (req, res) => {
    db.User.create(req)
      .then(data => res.send(data))
      .catch(err => res.send(err));
  },

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
