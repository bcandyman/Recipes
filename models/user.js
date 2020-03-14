const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      ingredientId: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
      quantity: {
        type: Number,
        default: 0,
      },
      unit: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
