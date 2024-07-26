// src/index.js

import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
// Swagger
import setupSwagger from './config/swagger.js';
// Routes 
import userRoutes from './routes/user.Routes.js';
import clientRoutes from './routes/client.Routes.js';
import homeRoutes from './routes/home.Routes.js';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000;

// Swagger Documentation
setupSwagger(app);

app.use(morgan('dev'));
app.use(express.json());

// Rutas principales
app.use(`/`, homeRoutes)
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);

app.listen(PORT, () => {
    console.log('\n==================================================')
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
    console.log(`📃 Swagger Docs: http://localhost:${PORT}/api-docs`)
    console.log('==================================================\n')
})