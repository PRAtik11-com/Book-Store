// src/router/AllRoutes.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Bookform from '../Component/Bookform';
import Booklist from '../Component/Booklist';
import Bookdetails from '../Component/Bookdetails';


const AllRoutes = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setSelectedBook(null);
    setRefresh(!refresh);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Bookform selectedBook={selectedBook} onSave={handleSave} />
            <Booklist onEdit={setSelectedBook} key={refresh} />
          </>
        }
      />
      <Route path="/book/:id" element={<Bookdetails />} />
    </Routes>
  );
};

export default AllRoutes;
