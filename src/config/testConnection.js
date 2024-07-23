import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testConnection() {
    try {
        // Ejecuta una consulta simple para verificar la conexión
        await prisma.$connect();
        console.log('Conexión a la base de datos exitosa!');
        const users = await prisma.user.findMany();
        console.log('Usuarios:', users);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    } finally {
        // Cierra la conexión
        await prisma.$disconnect();
    }
}

testConnection();