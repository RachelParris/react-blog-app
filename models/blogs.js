const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  blogname: {
    type: String,
    unique: true
  },
  title: String,
  desc: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;
