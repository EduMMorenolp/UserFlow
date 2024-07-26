// src/middlewares/authTokenMiddleware.js


import prisma from '../config/db.js';
import jwt from 'jsonwebtoken';

export const authMiddlewareToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token JWT requerido.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
        });

        if (!user) {
            return res.status(401).json({ error: 'Token JWT inválido - Usuario no encontrado.' });
        }

        req.user = user; // Asigna el usuario encontrado al objeto de solicitud req
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Token JWT inválido.' });
    }
};