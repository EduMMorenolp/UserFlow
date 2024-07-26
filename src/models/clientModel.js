// src/models/clientModel.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClients = async (adminId) => {
    try {
        return await prisma.client.findMany({
            where: { adminId },
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
            where: { id: Number(id) },
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
        return await prisma.client.create({
            data: { ...clientData, adminId },
        });
    } catch (error) {
        throw new Error('Error al crear cliente.');
    } finally {
        await prisma.$disconnect();
    }
};

export const updateClient = async (id, clientData) => {
    try {
        return await prisma.client.update({
            where: { id: Number(id) },
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
        await prisma.client.delete({
            where: { id: Number(id) },
        });
    } catch (error) {
        throw new Error('Error al eliminar cliente.');
    } finally {
        await prisma.$disconnect();
    }
};
