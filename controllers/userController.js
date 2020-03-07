const db = require('../models');

module.exports = {
  create: (req, res) => {
    db.User.create(req)
      .then(data => res.send(data))
      .catch(err => res.send(err));
  },

  addIngredient: (req, res) => {
    //user._id = 5e63cd53c8db8a681db36649
    db.User.findOneAndUpdate(
      { _id: '5e63e43bb450356a2a0cae14' },
      { $push: { ingredients: { ingredientId: '5e63232003108061d92fa38c' } } },
    )
      .then(res.send('savedIngredient'))
      .catch(err => res.send(err));
  },
};
