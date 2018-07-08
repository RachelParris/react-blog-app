const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
require('dotenv').load();

// Configuration
const { PORT, MONGODB_URI } = process.env;
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(`${MONGODB_URI}`);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/', routes);


// Run server and start database connection
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
  db.on('error', () => {
    console.error('Connection error to database.');
  });
  db.once('open', () => {
    console.log('Now connected to database!');
  });
});