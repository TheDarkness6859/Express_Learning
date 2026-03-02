import express from 'express';
import { authorsRoutes } from './routes/crud.route.js';

const app = express();

app.use(express.json());

app.use('/api/authors', authorsRoutes);

export default app;