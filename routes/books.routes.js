const express = require('express');
const { createBook, getBooks, updateBook, deleteBook } = require('../controller/books.controller');
const booksRouter = express.Router();

booksRouter.get("/booksget",getBooks)
booksRouter.post("/bookscreate",createBook)
booksRouter.put("/bookupdate/:id",updateBook)
booksRouter.delete("/bookdelete/:id",deleteBook)

module.exports = booksRouter;