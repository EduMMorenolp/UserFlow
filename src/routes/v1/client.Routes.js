// src/routes/client.Routes.js

import express from 'express';
import { getClients, getClientById, createClient, updateClient, deleteClient, loginClient } from '../../controllers/v1/clientController.js';
import { authApiKeyMiddleware } from '../../middlewares/authApiKeyMiddleware.js';

const router = express.Router();

// Middleware de autenticación
router.use(authApiKeyMiddleware);

// Rutas para clientes
router.get('/', getClients);
router.get('/:id', getClientById);
router.post('/register', createClient);
router.post('/login', loginClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
