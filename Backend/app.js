import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler,notFound } from './middleware/error.middleware';
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.use(notFound);
app.use(errorHandler);


export default app;