const express =
  require('express');

const router =
  express.Router();

const User =
  require('../models/User');


// =============================
// SIGNUP
// =============================
router.post(
  '/signup',
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
      } = req.body;

      // CHECK EXISTING USER
      const existingUser =
        await User.findOne({
          email,
        });

      if (
        existingUser
      ) {

        return res.status(400).json({
          msg:
            'User already exists',
        });

      }

      // CREATE USER
      const user =
        new User({

          name,
          email,
          password,

        });

      await user.save();

      res.status(201).json({
        msg:
          'Signup successful',
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server Error',
      });

    }

  },
);


// =============================
// LOGIN
// =============================
router.post(
  '/login',
  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      // FIND USER
      const user =
        await User.findOne({
          email,
        });

      if (!user) {

        return res.status(400).json({
          msg:
            'User not found',
        });

      }

      // CHECK PASSWORD
      if (
        user.password !==
        password
      ) {

        return res.status(400).json({
          msg:
            'Invalid password',
        });

      }

      res.status(200).json({

        msg:
          'Login successful',

        user,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server Error',
      });

    }

  },
);


// =============================
// FORGOT PASSWORD
// =============================
router.put(
  '/forgot-password',
  async (req, res) => {

    try {

      const {
        email,
        newPassword,
      } = req.body;

      // CHECK USER
      const user =
        await User.findOne({
          email,
        });

      if (!user) {

        return res.status(404).json({
          msg:
            'User not found',
        });

      }

      // UPDATE PASSWORD
      user.password =
        newPassword;

      await user.save();

      res.json({
        msg:
          'Password updated successfully',
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server Error',
      });

    }

  },
);

module.exports =
  router;