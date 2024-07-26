// src/models/clientModel.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClients = async (adminId) => {
    try {
        return await prisma.client.findMany({
            where: { id, deletedAt: null },
        });
    } catch (error) {
        throw new Error('Error al obtener clientes.');
    } finally {
        await prisma.$disconnect();
    }
};

export const getClientById = async (id, adminId) => {
    try {
        const client = await prisma.client.findUnique({
            where: { id, deletedAt: null },
        });
        if (client && client.adminId === adminId) {
            return client;
        }
        return null;
    } catch (error) {
        throw new Error('Error al obtener cliente por ID.');
    } finally {
        await prisma.$disconnect();
    }
};

export const createClient = async (clientData, adminId) => {
    try {
        // Verificar si el correo electrónico ya está en uso
        const existingClient = await prisma.client.findUnique({
            where: {
                email: clientData.email
            }
        });
        if (existingClient) {
            throw new Error('El correo electrónico ya está en uso.');
        }
        // Crear el nuevo cliente
        return await prisma.client.create({
            data: { ...clientData, adminId },
        });
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    } finally {
        await prisma.$disconnect();
    }
};

export const updateClient = async (id, clientData) => {
    try {
        return await prisma.client.update({
            where: { id, deletedAt: null },
            data: clientData,
        });
    } catch (error) {
        throw new Error('Error al actualizar cliente.');
    } finally {
        await prisma.$disconnect();
    }
};

export const deleteClient = async (id) => {
    try {
        await prisma.client.update({
            where: { id },
            data: { deletedAt: new Date() }
        });
    } catch (error) {
        throw new Error('Error al eliminar cliente.');
    } finally {
        await prisma.$disconnect();
    }
};
