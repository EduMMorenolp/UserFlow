// src/controllers/v1/authController.js

import passport from '../../middlewares/passport.js';

export const githubAuth = passport.authenticate('github', { session: false, scope: ['user:email'] });

export const githubAuthCallback = (req, res, next) => {
    passport.authenticate('github', { session: false }, (err, result) => {
        if (err || !result) {
            return res.redirect('/');
        }

        const { user, token } = result;
        res.json({ user, token });
        // res.cookie('jwt', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        // res.redirect('/');
    })(req, res, next);
};
