const express = require('express');

const router = express.Router();

const Restaurant =
  require('../models/Restaurant');


// GET ALL RESTAURANTS
router.get(
  '/restaurants',

  async (req, res) => {

    try {

      const restaurants =
        await Restaurant.find();

      res.json(restaurants);

    } catch (error) {

      res.status(500).json({
        message:
          'Failed to fetch restaurants',
      });
    }
  },
);


// ADD RESTAURANT
router.post(
  '/restaurants',

  async (req, res) => {

    try {

      const newRestaurant =
        new Restaurant(req.body);

      await newRestaurant.save();

      res.status(201).json({
        message:
          'Restaurant added successfully',
      });

    } catch (error) {

      res.status(500).json({
        message:
          'Failed to add restaurant',
      });
    }
  },
);

module.exports = router;