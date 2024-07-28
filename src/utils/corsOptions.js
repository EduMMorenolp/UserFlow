// src/utils/corsSetup.js

import cors from 'cors';

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

const setupCors = (app) => {
    app.use(cors(corsOptions));
};

export default setupCors;