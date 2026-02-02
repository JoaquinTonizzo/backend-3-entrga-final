import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import { specs, swaggerUiExpress } from './swagger/swagger.config.js';

const app = express();

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';

const MONGO_URL = process.env.NODE_ENV === 'test'
  ? 'mongodb://localhost:27017/adoption-test-db'
  : process.env.MONGO_URL || 'mongodb://localhost:27017/adoption-db';

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Error MongoDB:', err));
} else {
  // Conexión para tests
  mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB test DB conectada'))
    .catch(err => console.error('Error MongoDB test:', err));
}

app.use(express.json());
app.use(cookieParser());

// Swagger
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

// Routes
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

if (ENV !== 'test') {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

export default app;
