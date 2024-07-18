
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