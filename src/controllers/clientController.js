import prisma from '../config/db.js';

// Obtener todos los clientes
export const getClients = async (req, res) => {
    try {
        const clients = await prisma.client.findMany();
        res.status(200).json(clients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener clientes.' });
    }
};

// Obtener un cliente por ID
export const getClientById = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await prisma.client.findUnique({
            where: { id: Number(id) },
        });

        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }

        res.status(200).json(client);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener cliente por ID.' });
    }
};

// Crear un nuevo cliente
export const createClient = async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        const adminId = req.user.id; // Obtener el ID del usuario administrador desde el token

        const admin = await prisma.user.findUnique({
            where: { id: adminId },
            include: { clients: true },
        });

        if (!admin) {
            return res.status(404).json({ error: 'Usuario administrador no encontrado.' });
        }

        const newClient = await prisma.client.create({
            data: {
                name,
                lastName,
                email,
                password,
                admin: {
                    connect: { id: adminId },
                },
            },
        });

        res.status(201).json(newClient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear cliente.' });
    }
};

// Actualizar un cliente por ID
export const updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, email } = req.body;

    try {
        const updatedClient = await prisma.client.update({
            where: { id: Number(id) },
            data: {
                name,
                lastName,
                email,
            },
        });

        res.status(200).json(updatedClient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar cliente.' });
    }
};

// Eliminar un cliente por ID
export const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.client.delete({
            where: { id: Number(id) },
        });

        res.status(200).json({ message: 'Cliente eliminado correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar cliente.' });
    }
};
