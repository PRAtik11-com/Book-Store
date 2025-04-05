import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./bookform.css"

const Bookform = ({ selectedBook, onSave }) => {
    const [form, setForm] = useState({
        title: '',
        author: '',
        price: '',
        description: ''
     
      });

      useEffect(() => {
        if (selectedBook) {
          setForm(selectedBook);
        }
      }, [selectedBook]);

      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (form._id) {
          await axios.put(`http://localhost:8080/api/bookupdate/${form._id}`, form);
        } else {
          await axios.post('http://localhost:8080/api/bookscreate', form);
        }
    
        onSave();
        setForm({ title: '', author: '', price: '', description: ''});
      };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <h2>{form._id ? "Update Book" : "Add Book"}</h2>
        {['title', 'author', 'price', 'description'].map((field) => (
          <input
            key={field}
            className="form-input"
            placeholder={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit" className="form-button">
          {form._id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  )
}

export default Bookform
