import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import fruitRoutes from './routes/fruitRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

app.use(morgan('dev'));

app.use('/api/', fruitRoutes);

app.listen('5000', console.log('...running on 5000'));
