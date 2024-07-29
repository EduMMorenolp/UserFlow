// src/schemas/clientSchema.js
import { z } from 'zod';

export const createClientSchema = z.object({
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    name: z.string().optional(),
    lastName: z.string().optional(),
});

export const updateClientSchema = z.object({
    email: z.string().email('Correo electrónico inválido').optional(),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').optional(),
    name: z.string().optional(),
    lastName: z.string().optional(),
});

export const loginClientSchema = z.object({
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
