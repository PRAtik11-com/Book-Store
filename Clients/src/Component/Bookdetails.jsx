import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Bookdetails = () => {
  const { id } = useParams(); // gets ID from the route
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`http://localhost:8080/api/booksget`);
      const found = res.data.find((el) => el._id === id);
      setBook(found);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p className="text-center mt-5">Loading book details...</p>;

  return (
    <div className="container mt-4">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link to="/" className="btn btn-secondary mt-3">Back to List</Link>
    </div>
  );
};

export default Bookdetails;
