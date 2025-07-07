const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  ingredients: {
    type: [String],
    required: [true, 'Ingredients are required'],
  },
  instructions: {
    type: String,
    required: [true, 'Instructions are required'],
  },
  prepTime: {
    type: Number,
    required: [true, 'Preparation time is required'],
    min: [0, 'Preparation time cannot be negative'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);