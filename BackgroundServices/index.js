import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './utils/db.js'; // don’t forget the .js extension in ESM
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // fallback if .env doesn't have it

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  dbConnection();
});
