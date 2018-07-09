const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');


// Get User
router.get('/user', (req, res, next) => {
  //
});

// Create User
router.post('/signup', (req, res, next) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) {
        res.status(409).json({ err: "Not able to save user info to database." });
    }
    res.status(200).json({ msg: "User info successfully saved to database!" });
  });

});

// Update user
// Delete user

module.exports = router;