import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import loanRoutes from './src/routes/loanRoutes';
import authRoutes from './src/routes/authRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || '', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/loans', loanRoutes);
app.use('/api/auth', authRoutes);

export default app;
