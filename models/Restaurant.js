const mongoose = require('mongoose');

const restaurantSchema =
  new mongoose.Schema({

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 4.0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    cuisine: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    priceRange: {
      type: String,
      default: '₹₹',
    },

    vegType: {
      type: String,
      default: 'Both',
    },

    review1: {
      type: String,
      default: '',
    },

    review2: {
      type: String,
      default: '',
    },

    review3: {
      type: String,
      default: '',
    },

  });

module.exports =
  mongoose.model(
    'Restaurant',
    restaurantSchema,
  );