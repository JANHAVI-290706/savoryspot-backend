const mongoose = require('mongoose');

const favoriteSchema =
  new mongoose.Schema({

    restaurantId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    cuisine: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    city: {
      type: String,
      required: true,
    },

  });

module.exports =
  mongoose.model(
    'Favorite',
    favoriteSchema,
  );