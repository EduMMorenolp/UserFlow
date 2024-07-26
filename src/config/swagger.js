// src/config/swagger.js

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.json' assert { type: "json" };

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;