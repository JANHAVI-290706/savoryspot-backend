const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const restaurantRoutes =
  require('./routes/restaurantRoutes');

const favoriteRoutes =
  require('./routes/favoriteRoutes');

const app = express();


// =============================
// 🔧 MIDDLEWARE
// =============================
app.use(cors());

app.use(express.json());


// =============================
// 🍴 ROUTES
// =============================
app.use('/api', restaurantRoutes);

app.use('/api', favoriteRoutes);


// =============================
// 🔗 CONNECT TO MONGODB ATLAS
// =============================
mongoose.connect(
  'mongodb+srv://savoryspot:Savory123@savoryspotdb.ceddmo1.mongodb.net/foodapp?retryWrites=true&w=majority&appName=SavorySpotDB'
)
.then(() => {

  console.log('✅ MongoDB Atlas Connected');

})
.catch((err) => {

  console.log(
    '❌ DB Error:',
    err
  );

});


// =============================
// 👤 USER MODEL
// =============================
const UserSchema =
  new mongoose.Schema({

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: '',
    },

    gender: {
      type: String,
      default: '',
    },

    dob: {
      type: String,
      default: '',
    },

    profileImage: {
      type: String,
      default: '',
    },

  });

const User = mongoose.model(
  'User',
  UserSchema,
);


// =============================
// 🚨 REPORT MODEL
// =============================
const ReportSchema =
  new mongoose.Schema({

    message: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

  });

const Report = mongoose.model(
  'Report',
  ReportSchema,
);


// =============================
// 📩 SUPPORT MODEL
// =============================
const SupportSchema =
  new mongoose.Schema({

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

  });

const Support = mongoose.model(
  'Support',
  SupportSchema,
);


// =============================
// ⭐ RATING MODEL
// =============================
const RatingSchema =
  new mongoose.Schema({

    rating: {
      type: Number,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

  });

const Rating = mongoose.model(
  'Rating',
  RatingSchema,
);


// =============================
// 📝 SIGNUP API
// =============================
app.post(
  '/api/auth/signup',
  async (req, res) => {

    try {

      let {
        name,
        email,
        password,
      } = req.body;

      email =
        email.toLowerCase().trim();

      if (
        !name ||
        !email ||
        !password
      ) {

        return res.status(400).json({
          msg:
            'Please fill all fields',
        });

      }

      const existingUser =
        await User.findOne({
          email,
        });

      if (existingUser) {

        return res.status(400).json({
          msg:
            'User already exists',
        });

      }

      const newUser =
        new User({
          name,
          email,
          password,
        });

      await newUser.save();

      res.status(200).json({

        msg:
          'User registered successfully',

        user: {

          name:
            newUser.name,

          email:
            newUser.email,

        },

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server error',
      });

    }

  }
);


// =============================
// 🔐 LOGIN API
// =============================
app.post(
  '/api/auth/login',
  async (req, res) => {

    try {

      let {
        email,
        password,
      } = req.body;

      email =
        email.toLowerCase().trim();

      if (
        !email ||
        !password
      ) {

        return res.status(400).json({
          msg:
            'Please enter all fields',
        });

      }

      const user =
        await User.findOne({
          email,
        });

      if (!user) {

        return res.status(400).json({
          msg:
            'Invalid email or password',
        });

      }

      if (
        user.password !== password
      ) {

        return res.status(400).json({
          msg:
            'Invalid email or password',
        });

      }

      res.status(200).json({

        msg:
          'Login successful',

        user: {

          name:
            user.name,

          email:
            user.email,

          phone:
            user.phone,

          gender:
            user.gender,

          dob:
            user.dob,

          profileImage:
            user.profileImage,

        },

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server error',
      });

    }

  }
);


// =============================
// 🔑 FORGOT PASSWORD API
// =============================
app.put(
  '/api/auth/forgot-password',
  async (req, res) => {

    try {

      const {
        email,
        newPassword,
      } = req.body;

      if (
        !email ||
        !newPassword
      ) {

        return res.status(400).json({
          msg:
            'Please fill all fields',
        });

      }

      const user =
        await User.findOne({
          email:
            email.toLowerCase().trim(),
        });

      if (!user) {

        return res.status(404).json({
          msg:
            'User not found',
        });

      }

      user.password =
        newPassword;

      await user.save();

      res.status(200).json({
        msg:
          'Password updated successfully',
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server error',
      });

    }

  }
);


// =============================
// 🚨 REPORT API
// =============================
app.post(
  '/api/report',
  async (req, res) => {

    try {

      const {
        message,
      } = req.body;

      if (!message) {

        return res.status(400).json({
          msg:
            'Please enter a message',
        });

      }

      const newReport =
        new Report({
          message,
        });

      await newReport.save();

      res.status(200).json({
        msg:
          'Report submitted successfully',
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server error',
      });

    }

  }
);


// =============================
// 📩 SUPPORT API
// =============================
app.post(
  '/api/support',
  async (req, res) => {

    try {

      const {
        email,
        message,
      } = req.body;

      if (
        !email ||
        !message
      ) {

        return res.status(400).json({
          msg:
            'Please fill all fields',
        });

      }

      const newSupport =
        new Support({

          email:
            email.toLowerCase().trim(),

          message,

        });

      await newSupport.save();

      res.status(200).json({
        msg:
          'Support request sent',
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server error',
      });

    }

  }
);


// =============================
// ⭐ RATING API
// =============================
app.post(
  '/api/rating',
  async (req, res) => {

    try {

      const {
        rating,
        review,
      } = req.body;

      if (
        !rating ||
        !review
      ) {

        return res.status(400).json({
          msg:
            'Please fill all fields',
        });

      }

      const newRating =
        new Rating({
          rating,
          review,
        });

      await newRating.save();

      res.status(200).json({
        msg:
          'Thank you for rating SavorySpot',
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg:
          'Server error',
      });

    }

  }
);


// =============================
// 🚀 START SERVER
// =============================
const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  '0.0.0.0',
  () => {

    console.log(
      `🚀 Server running on port ${PORT}`
    );

  }
);