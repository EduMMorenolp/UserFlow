// src/schemas/userSchema.js
import { z } from 'zod';

export const registerUserSchema = z.object({
    name: z.string().min(1, 'Nombre es obligatorio'),
    lastName: z.string().min(1, 'Apellido es obligatorio'),
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const loginUserSchema = z.object({
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});


