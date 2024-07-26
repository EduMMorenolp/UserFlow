// src/controllers/userController.js
import * as userModel from '../../models/v1/userModel.prisma.js';
import { generateApiKey } from '../../utils/generateApiKey.js';
import { generateJWT } from '../../utils/generateJWT.js';
import { hashPassword, comparePassword } from '../../utils/hashPassword.js';

export const registerUser = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (!name || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya está registrado.' });
    }

    const hashedPassword = await hashPassword(password);
    const apiKey = generateApiKey();

    const newUser = await userModel.createUser({
      name,
      lastName,
      email,
      password: hashedPassword,
      apiKey,
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente.', apiKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar usuario.' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas.' });
    }

    const token = generateJWT(user.id, user.email);

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      apiKey: user.apiKey,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
};

export const regenerateApiKey = async (req, res) => {
  const userId = req.user.id;

  try {
    const apiKey = generateApiKey();

    await userModel.updateUserApiKey(userId, apiKey);

    res.status(200).json({ message: 'API Key actualizada correctamente.', apiKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar API Key.' });
  }
};
