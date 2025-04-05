const Book = require("../model/books.model");


const getBooks = async (req, res) => {
 try {
    const books = await Book.find();
    res.status(200).json(books);
 } catch (error) {
    res.status(400).json({message:error.message})
 }
};

const createBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({message:error.message})
  }
 
};

const deleteBook = async (req, res) => {
try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "book deleted successfully" });
} catch (error) {
    res.status(400).json({message:error.message})
}
  };

const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({message:error.message})
  }
};

module.exports = {getBooks,createBook,deleteBook,updateBook}
