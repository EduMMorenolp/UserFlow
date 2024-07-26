// src/controllers/userController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../config/db.js';

const generateApiKey = () => {
  return uuidv4(); // Genera un UUID único como API key
};

export const registerUser = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (!name || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    let existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya está registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const apiKey = generateApiKey();

    const newUser = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password: hashedPassword,
        apiKey,
      },
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente.', apiKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar usuario.' });
  } finally {
    await prisma.$disconnect();
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas.' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token: token,
      apiKey: user.apiKey
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  } finally {
    await prisma.$disconnect();
  }
};

export const regenerateApiKey = async (req, res) => {
  const userId = req.user.id;

  try {
    const apiKey = generateApiKey();

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { apiKey },
    });

    res.status(200).json({ message: 'API Key actualizada correctamente.', apiKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar API Key.' });
  } finally {
    await prisma.$disconnect();
  }
};
