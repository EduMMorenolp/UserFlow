import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy as GitHubStrategy } from 'passport-github2';
import jwt from 'jsonwebtoken';
import { prisma } from '../database/prismaClient.js';

dotenv.config();

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}/api/v1/github/auth/callback`
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(accessToken, refreshToken, profile)
        let user = await prisma.user.findUnique({
            where: { githubId: profile.id },
        });

        if (!user && profile.emails && profile.emails.length > 0) {
            user = await prisma.user.findUnique({
                where: { email: profile.emails[0].value },
            });

            if (user) {
                user = await prisma.user.update({
                    where: { email: profile.emails[0].value },
                    data: { githubId: profile.id },
                });
            }
        }

        if (!user) {
            user = await prisma.user.create({
                data: {
                    githubId: profile.id,
                    email: profile.emails[0].value,
                    name: profile.displayName,
                    password: ''
                },
            });
        }

        const jwtPayload = { id: user.id };
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

        return done(null, { user, token });
    } catch (err) {
        return done(err);
    }
}));

export default passport;
