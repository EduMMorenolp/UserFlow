// src/middlewares/authApiKeyMiddleware.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authApiKeyMiddleware = async (req, res, next) => {
    const apiKey = req.headers['authorization'];

    if (!apiKey) {
        console.log(apiKey)
        return res.status(401).json({ error: 'API Key requerida.' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { apiKey },
        });

        if (!user) {
            console.log(user)
            console.log(apiKey)
            return res.status(401).json({ error: 'API Key inválida.' });
        }
        console.log(apiKey)
        console.log(user)
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al validar API Key.' });
    }
};