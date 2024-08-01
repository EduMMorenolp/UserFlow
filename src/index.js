// src/index.js

import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';
// Swagger
import setupSwaggerV1 from '../swagger/v1/main.js';
// Cors
import setupCors from './database/corsOptions.js';
// Routes 
import userRoutes from './routes/v1/user.Routes.js';
import clientRoutes from './routes/v1/client.Routes.js';
import homeRoutes from './routes/v1/home.Routes.js';
import githubRoutes from './routes/v1/github.Routes.js';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS
setupCors(app);

// Configuración de Passport
app.use(passport.initialize());

// Configura Swagger UI
setupSwaggerV1(app);

// Ruta Inicio
app.use(`/`, homeRoutes)
// Rutas principales v1
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/clients', clientRoutes);
// Autentificación con Github
app.use('/api/v1/github', githubRoutes);

app.listen(PORT, () => {
    console.log('\n==================================================')
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
    console.log(`📃 Swagger Docs: http://localhost:${PORT}/api-docs`)
    console.log('==================================================\n')
})