const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  description: String
  
},{
  timestamps: true,
  versionKey:false
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book