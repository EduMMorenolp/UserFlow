// src/models/userModel.js
import prisma from '../config/db.js';

export const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};

export const createUser = async (userData) => {
    return await prisma.user.create({
        data: userData,
    });
};

export const updateUserApiKey = async (userId, apiKey) => {
    return await prisma.user.update({
        where: { id: userId },
        data: { apiKey },
    });
};
