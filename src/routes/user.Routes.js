// userRoutes.js

import express from 'express';
import { registerUser, loginUser, regenerateApiKey } from '../controllers/userController.js';
import { authMiddlewareToken } from '../middlewares/authTokenMiddleware.js';

const router = express.Router();

// Rutas para usuarios
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/regenerate-api-key', authMiddlewareToken, regenerateApiKey); // Ruta protegida

export default router;
