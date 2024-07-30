// src/middlewares/authTokenMiddleware.js
import { findUserById } from '../models/v1/userModel.prisma.js';
import { verifyJWT } from '../utils/generateJWT.js'

export const authMiddlewareToken = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó token.' });
    }
    try {
        const decoded = verifyJWT(token);
        const user = await findUserById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Token JWT inválido - Usuario no encontrado.' });
        }
        req.user = user; // Asigna el usuario encontrado al objeto de solicitud req
        next();
    } catch (error) {
        console.error('Error al verificar el token:', error);
        return res.status(401).json({ error: 'Token JWT inválido.' });
    }
};