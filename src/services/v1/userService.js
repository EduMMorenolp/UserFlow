// src/services/userService.js
import {
    createUser,
    deletedUser,
    findUserByEmail,
    updateUserApiKey,
} from '../../models/v1/userModel.prisma.js';
import { generateApiKey } from '../../utils/generateApiKey.js';
import { generateJWT } from '../../utils/generateJWT.js';
import { hashPassword, comparePassword } from '../../utils/hashPassword.js';

export const registerUserService = async (userData) => {
    const { name, lastName, email, password } = userData;

    if (!name || !lastName || !email || !password) {
        throw new Error('Todos los campos son obligatorios.');
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error('El usuario ya está registrado.');
    }

    const hashedPassword = await hashPassword(password);
    const apiKey = generateApiKey();

    const newUser = await createUser({
        name,
        lastName,
        email,
        password: hashedPassword,
        apiKey,
    });

    return { message: 'Usuario registrado exitosamente.', apiKey };
};

export const loginUserService = async (email, password) => {
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('Usuario no encontrado.');
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Credenciales inválidas.');
    }

    const token = generateJWT(user.id, user.email);

    return {
        message: 'Inicio de sesión exitoso',
        idUser: user.id,
        token,
        apiKey: user.apiKey,
    };
};

export const regenerateApiKeyService = async (userId) => {
    const apiKey = generateApiKey();
    await updateUserApiKey(userId, apiKey);

    return { message: 'API Key actualizada correctamente.', apiKey };
};

export const deleteUserService = async (userId) => {
    await deletedUser(userId);
    return { message: 'Usuario eliminado correctamente.' };
};
