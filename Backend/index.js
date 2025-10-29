import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

import dbConnection from './util/db.js';
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});

dbConnection();

