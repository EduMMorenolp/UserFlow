// src/controllers/userController.js
import {
  registerUserService,
  loginUserService,
  regenerateApiKeyService,
  deleteUserService,
} from '../../services/v1/userService.js';
import { registerUserSchema, loginUserSchema } from '../../schemas/v1/userSchema.js';

export const registerUser = async (req, res) => {
  try {
    registerUserSchema.parse(req.body);
    const response = await registerUserService(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    loginUserSchema.parse(req.body);
    const { email, password } = req.body;
    const response = await loginUserService(email, password);
    res.status(200).json(response);
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(400).json({ error: error.message });
  }
};

export const regenerateApiKey = async (req, res) => {
  try {
    const userId = req.user.id;
    const response = await regenerateApiKeyService(userId);
    res.status(200).json(response);
  } catch (error) {
    console.error('Error al actualizar API Key:', error);
    res.status(500).json({ error: 'Error al actualizar API Key.' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const response = await deleteUserService(userId);
    res.status(200).json(response);
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario.' });
  }
};
