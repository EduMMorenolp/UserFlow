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
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener clientes.' });
    }
};

export const getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await clientModel.getClientById(id, req.user.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }
        const formattedClient = formatClientResponse(client);
        res.status(200).json(formattedClient);
    } catch (error) {
        console.error('Error al obtener cliente por ID:', error);
        res.status(500).json({ error: 'Error al obtener cliente por ID.' });
    }
};

export const createClient = async (req, res) => {
    try {
        const newClient = await clientModel.createClient(req.body, req.user.id);
        const formattedClient = formatClientResponse(newClient);
        res.status(201).json(formattedClient);
    } catch (error) {
        console.error('Error al crear cliente:', error);
        res.status(500).json({ error: 'Error al crear cliente.' });
    }
};

export const updateClient = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedClient = await clientModel.updateClient(id, req.body);
        const formattedClient = formatClientResponse(updatedClient);
        res.status(200).json(formattedClient);
    } catch (error) {
        onsole.error('Error al actualizar cliente:', error);
        res.status(500).json({ error: 'Error al actualizar cliente.' });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await clientModel.deleteClient(id);
        res.status(200).json({ message: 'Cliente eliminado correctamente.' });
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: 'Error al eliminar cliente.' });
    }
};

export const loginClient = async (req, res) => {
    try {
        const { email, password } = req.body;
        const client = await clientModel.loginClient(email, password);
        if (!client) {
            return res.status(401).json({ error: 'Credenciales inválidas.' });
        }
        const formattedClient = formatClientResponse(client);
        res.status(200).json(formattedClient);
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión.' });
    }
};