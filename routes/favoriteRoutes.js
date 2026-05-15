const express = require('express');

const router = express.Router();

const Favorite =
  require('../models/Favorite');


// =============================
// ADD TO FAVORITES
// =============================
router.post(
  '/favorites',
  async (req, res) => {

    try {

      const favorite =
        new Favorite(req.body);

      await favorite.save();

      res.status(200).json({

        message:
          'Added to favorites',

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error',

      });

    }

  }
);


// =============================
// GET FAVORITES
// =============================
router.get(
  '/favorites',
  async (req, res) => {

    try {

      const favorites =
        await Favorite.find();

      res.status(200).json(
        favorites,
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error',

      });

    }

  }
);


// =============================
// DELETE FAVORITE
// =============================
router.delete(
  '/favorites/:id',
  async (req, res) => {

    try {

      await Favorite.findByIdAndDelete(
        req.params.id,
      );

      res.status(200).json({

        message:
          'Favorite removed',

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error',

      });

    }

  }
);

module.exports = router;