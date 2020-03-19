const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    extendedIngredients: { type: Array, required: true },
    analyzedInstructions: { type: Array, required: true },
    preperationMinutes: { type: Number, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
