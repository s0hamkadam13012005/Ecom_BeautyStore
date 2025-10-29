import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is working!');
});

export default app;