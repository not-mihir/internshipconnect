const mongoose = require("mongoose");
require('dotenv').config(); // Add this line to load environment variables

mongoose.set("debug", true);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE, { // Use the connection string from the .env file
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports.Student = require("./student");
module.exports.Internship = require("./internship");
module.exports.Notices = require("./notices");
module.exports.Faculty = require("./faculty");
