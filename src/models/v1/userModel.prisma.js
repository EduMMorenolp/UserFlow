// src/models/userModel.js
import { prisma } from '../../config/prismaClient.js';

export const findUserById = async (id) => {
    try {
        return await prisma.user.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error('Error al buscar usuario por ID:', error);
        throw new Error('Error al buscar usuario por ID.');
    } finally {
        await prisma.$disconnect();
    }
};

export const findUserByApiKey = async (apiKey) => {
    try {
        return await prisma.user.findUnique({
            where: { apiKey },
        });
    } catch (error) {
        console.error('Error al buscar usuario por API Key:', error);
        throw new Error('Error al buscar usuario por API Key.');
    } finally {
        await prisma.$disconnect();
    }
};

export const findUserByEmail = async (email) => {
    try {
        return await prisma.user.findUnique({
            where: { email },
        });
    } catch (error) {
        console.error('Error al buscar usuario por correo electrónico:', error);
        throw new Error('Error al buscar usuario por correo electrónico.');
    } finally {
        await prisma.$disconnect();
    }
};

export const createUser = async (userData) => {
    try {
        return await prisma.user.create({
            data: userData,
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw new Error('Error al crear usuario.');
    } finally {
        await prisma.$disconnect();
    }
};

export const updateUserApiKey = async (userId, apiKey) => {
    try {
        return await prisma.user.update({
            where: { id: userId },
            data: { apiKey },
        });
    } catch (error) {
        console.error('Error al actualizar la clave API del usuario:', error);
        throw new Error('Error al actualizar la clave API del usuario.');
    } finally {
        await prisma.$disconnect();
    }
};

export const deleteUser = async (id) => {
    try {
        return await prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw new Error('Error al eliminar usuario.');
    } finally {
        await prisma.$disconnect();
    }
};
