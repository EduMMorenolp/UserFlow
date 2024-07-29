// src/services/clientService.js
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

export const getClientsService = async (adminId) => {
    const clients = await clientModel.getClients(adminId);
    return clients.map(formatClientResponse);
};

export const getClientByIdService = async (id, adminId) => {
    const client = await clientModel.getClientById(id, adminId);
    return client ? formatClientResponse(client) : null;
};

export const createClientService = async (clientData, adminId) => {
    const newClient = await clientModel.createClient(clientData, adminId);
    return formatClientResponse(newClient);
};

export const updateClientService = async (id, clientData) => {
    const updatedClient = await clientModel.updateClient(id, clientData);
    return formatClientResponse(updatedClient);
};

export const deleteClientService = async (id) => {
    await clientModel.deleteClient(id);
};

export const loginClientService = async (email, password) => {
    const client = await clientModel.loginClient(email, password);
    return client ? formatClientResponse(client) : null;
};
