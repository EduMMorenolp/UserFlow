// src/services/v1/githubService.js
import { prisma } from '../../database/prismaClient.js';
import { generateJWT } from '../../utils/generateJWT.js';

export const handleGitHubAuth = async (profile) => {
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
    const token = generateJWT(jwtPayload, process.env.JWT_SECRET);
    return { user, token };
};
