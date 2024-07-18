import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRoutes from './routes/user.Routes.js';
import clientRoutes from './routes/client.Routes.js';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

// Rutas principales
app.use('api/users', userRoutes);
app.use('api/clients', clientRoutes);

app.listen(PORT, () => {
    console.log('\n==================================================')
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
    console.log('==================================================\n')
})