// src/routes/v1/github.Rotues.js

import express from 'express';
import {
    githubAuth,
    githubAuthCallback
} from '../../controllers/v1/githubController.js';
import { authApiKeyMiddleware } from '../../middlewares/authApiKeyMiddleware.js';

const githubRoutes = express.Router();

// Rutas de autenticación con GitHub
githubRoutes.get('/auth', githubAuth);
// ,authApiKeyMiddleware 
githubRoutes.get('/auth/callback', githubAuthCallback);

export default githubRoutes;