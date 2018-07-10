const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');


// Get User
router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username, password }, (err, user) => {
    const { username, firstname, lastname } = user;

    if (err) {
      res.status(409).json({ err: err.message });
      return;
    }

    res.status(200).json({ username, firstname, lastname });
  });
});

// Create User
router.post('/signup', (req, res, next) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) {
        res.status(409).json({ err: err.message });
        return;
    }

    res.status(200).json({ msg: 'User info successfully saved to database!' });
  });

});

// Update user
// Delete user

module.exports = router;