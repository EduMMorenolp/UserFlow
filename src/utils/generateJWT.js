// src/utils/generateJWT.js
import jwt from 'jsonwebtoken';

export const generateJWT = (userId, email) => {
    return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

export const verifyJWT = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};