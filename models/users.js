const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  email: {
    type: String,
    lowercase: true,
    unique: true
  },
  password: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;
