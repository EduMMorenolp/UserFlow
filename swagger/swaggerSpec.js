// swagger/swaggerSpec.js

import info from './info.js';
import servers from './servers.js';
import register from './paths/users/register.js';
import login from './paths/users/login.js';
import regenerateApiKey from './paths/users/regenerateApiKey.js';
import getAllClients from './paths/clients/getAllClients.js';
import createClient from './paths/clients/createClient.js';
import clientById from './paths/clients/clientById.js';
import UserRegistration from './components/schemas/UserRegistration.js';
import UserLogin from './components/schemas/UserLogin.js';
import Client from './components/schemas/Client.js';
import ClientInput from './components/schemas/ClientInput.js';
import ClientUpdateInput from './components/schemas/ClientUpdateInput.js';
import bearerAuth from './components/securitySchemes/bearerAuth.js';
import apiKeyAuth from './components/securitySchemes/apiKeyAuth.js';

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        '/api/users/register': register,
        '/api/users/login': login,
        '/api/users/regenerate-api-key': regenerateApiKey,
        '/userflow/clients': {
            ...getAllClients,
            ...createClient
        },
        '/userflow/clients/{id}': clientById
    },
    components: {
        schemas: {
            UserRegistration,
            UserLogin,
            Client,
            ClientInput,
            ClientUpdateInput
        },
        securitySchemes: {
            bearerAuth,
            apiKeyAuth
        }
    }
};

export default swaggerSpec;

