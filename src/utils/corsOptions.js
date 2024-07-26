// src/utils/corsSetup.js

import cors from 'cors';

const corsOptions = {
    origin: ['http://localhost:3000', 'https://userflow-7y2o.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

const setupCors = (app) => {
    app.use(cors(corsOptions));
};

export default setupCors;