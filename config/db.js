const mongoose = require('mongoose');
require("dotenv").config()

const connection = mongoose.connect(process.env.Bookstore_url)

module.exports = connection