// src/middlewares/authApiKeyMiddleware.js

import { findUserByApiKey } from '../models/v1/userModel.prisma.js';

export const authApiKeyMiddleware = async (req, res, next) => {
    const apiKey = req.headers['authorization'];

    if (!apiKey) {
        return res.status(401).json({ error: 'API Key requerida.' });
    }
    try {
        const user = await findUserByApiKey(apiKey);
        if (!user) {
            console.log(user)
            console.log(apiKey)
            return res.status(401).json({ error: 'API Key inválida.' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al validar API Key.' });
    }
};