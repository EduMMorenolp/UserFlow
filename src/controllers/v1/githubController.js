// src/controllers/v1/githubController.js

import passport from '../../middlewares/passportMiddleware.js';
import { handleGitHubAuth } from '../../services/v1/githubService.js';

// Inicia el flujo de autenticación con GitHub
export const githubAuth = passport.authenticate('github', { session: false, scope: ['user:email'] });

// Callback después de la autenticación con GitHub
export const githubAuthCallback = async (req, res, next) => {
    passport.authenticate('github', { session: false }, async (err, result) => {
        if (err || !result) {
            return res.redirect('/');
        }
        try {
            const { user, token } = await handleGitHubAuth(result.profile);
            res.json({ user, token });
        } catch (error) {
            console.error('Error en la autenticación de GitHub:', error);
            res.status(500).json({ error: 'Error en la autenticación de GitHub.' });
        }
    })(req, res, next);
};
