// src/utils/generateApiKey.js
import { v4 as uuidv4 } from 'uuid';

export const generateApiKey = () => {
    return uuidv4(); // Genera un UUID único como API key
};