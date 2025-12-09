import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import authRoute from './routes/auth.route.js';
import productRoute from './routes/product.route.js';
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/products' , productRoute);
app.use("/api/v1/users", userRoute);
// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
