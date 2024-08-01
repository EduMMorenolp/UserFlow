import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy as GitHubStrategy } from 'passport-github2';

dotenv.config();

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}/api/v1/github/auth/callback`
}, async (accessToken, refreshToken, profile, done) => {
    return done(null, { accessToken, profile });
}));

export default passport;