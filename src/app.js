import express from 'express';
import { authorsRoutes } from './routes/crud.route.js';
import mongoRoutes from './routes/crudmon.route.js';

const app = express();

app.use(express.json());

app.use('/api/authors', authorsRoutes);
app.use('/api/authors', mongoRoutes)

export default app;