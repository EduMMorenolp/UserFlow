// src/controllers/clientController.js
import {
    getClientsService,
    getClientByIdService,
    createClientService,
    updateClientService,
    deleteClientService,
    loginClientService
} from '../../services/v1/clientService.js';
import { createClientSchema, updateClientSchema, loginClientSchema } from '../../schemas/v1/clientSchema.js';

export const getClients = async (req, res) => {
    try {
        const clients = await getClientsService(req.user.id);
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener clientes.' });
    }
};

export const getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await getClientByIdService(id, req.user.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }
        res.status(200).json(client);
    } catch (error) {
        console.error('Error al obtener cliente por ID:', error);
        res.status(500).json({ error: 'Error al obtener cliente por ID.' });
    }
};

export const createClient = async (req, res) => {
    try {
        createClientSchema.parse(req.body);
        const newClient = await createClientService(req.body, req.user.id);
        res.status(201).json(newClient);
    } catch (error) {
        console.error('Error al crear cliente:', error);
        res.status(500).json({ error: 'Error al crear cliente.' });
    }
};

export const updateClient = async (req, res) => {
    const { id } = req.params;
    try {
        updateClientSchema.parse(req.body);
        const updatedClient = await updateClientService(id, req.body);
        res.status(200).json(updatedClient);
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).json({ error: 'Error al actualizar cliente.' });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteClientService(id);
        res.status(200).json({ message: 'Cliente eliminado correctamente.' });
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: 'Error al eliminar cliente.' });
    }
};

export const loginClient = async (req, res) => {
    try {
        loginClientSchema.parse(req.body);
        const { email, password } = req.body;
        const client = await loginClientService(email, password);
        if (!client) {
            return res.status(401).json({ error: 'Credenciales inválidas.' });
        }
        res.status(200).json(client);
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión.' });
    }
};
