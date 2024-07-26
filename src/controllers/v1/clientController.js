// src/controllers/clientController.js
import * as clientModel from '../../models/v1/clientModel.prisma.js';

const formatClientResponse = (client) => {
    return {
        id: client.id,
        email: client.email,
        name: client.name,
        lastName: client.lastName,
        createdAt: client.createdAt,
        updatedAt: client.updatedAt,
        adminId: client.adminId,
    };
};

export const getClients = async (req, res) => {
    try {
        const clients = await clientModel.getClients(req.user.id);
        const formattedClients = clients.map(formatClientResponse);
        res.status(200).json(formattedClients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await clientModel.getClientById(id, req.user.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }
        const formattedClients = formatClientResponse(client);
        res.status(200).json(formattedClients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const createClient = async (req, res) => {
    try {
        const newClient = await clientModel.createClient(req.body, req.user.id);
        const formattedClients = formatClientResponse(newClient);
        res.status(200).json(formattedClients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const updateClient = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedClient = await clientModel.updateClient(id, req.body);
        const formattedClients = formatClientResponse(updatedClient);
        res.status(200).json(formattedClients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await clientModel.deleteClient(id);
        res.status(200).json({ message: 'Cliente eliminado correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
