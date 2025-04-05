import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Booklist = ({ onEdit }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/api/booksget');
      setBooks(res.data);
    };
  
    useEffect(() => {
      fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/bookdelete/${id}`);
        fetchBooks();
      };

  return (
    <div className="container">
      <h4>Book List</h4>
      {books.map((book) => (
        <div key={book._id} className="card my-2 p-3">
          <h5>{book.title}</h5>
          <p>{book.author} </p> 
          <p> ₹{book.price}</p>
          <p>{book.description}</p>
          <button className="btn btn-warning btn-sm mt-2 me-2" onClick={() => onEdit(book)}>Edit</button>
          <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Booklist
