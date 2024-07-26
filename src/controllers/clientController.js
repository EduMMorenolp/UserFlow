// src/controllers/clientController.js
import * as clientModel from '../models/clientModel.js';

export const getClients = async (req, res) => {
    try {
        const clients = await clientModel.getClients(req.user.id);
        res.status(200).json(clients);
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
        res.status(200).json(client);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const createClient = async (req, res) => {
    try {
        const newClient = await clientModel.createClient(req.body, req.user.id);
        res.status(201).json(newClient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const updateClient = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedClient = await clientModel.updateClient(id, req.body);
        res.status(200).json(updatedClient);
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
