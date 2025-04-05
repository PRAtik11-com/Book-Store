const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRouter = require('./routes/books.routes');
const connection = require('./config/db');
require('dotenv').config();


const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', booksRouter);


app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error to MongoDB:", error);
    }
  });
