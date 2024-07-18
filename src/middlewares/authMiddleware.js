
import prisma from '../config/db.js';

export const authMiddleware = async (req, res, next) => {
    const apiKey = req.headers['authorization'];

    if (!apiKey) {
        return res.status(401).json({ error: 'API Key requerida.' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { apiKey },
        });

        if (!user) {
            return res.status(401).json({ error: 'API Key inválida.' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al validar API Key.' });
    }
};

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