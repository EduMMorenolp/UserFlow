// swagger/swaggerSpec.js

import info from './info.js';
import servers from './servers.js';
import register from './paths/users/registerUser.js';
import login from './paths/users/loginUser.js';
import regenerateApiKey from './paths/users/regenerateApiKeyUser.js';
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
import deleteUser from './paths/users/deleteUser.js';
import loginClient from './paths/clients/loginClient.js';
import ClientLogin from './components/schemas/ClientLogin.js';

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        '/api/v1/users/register': register,
        '/api/v1/users/login': login,
        '/api/v1/users/regenerate-api-key': regenerateApiKey,
        '/api/v1/users/deleteUser': deleteUser,
        '/userflow/v1/clients': {
            ...getAllClients
        },
        '/userflow/v1/clients/register': createClient,
        '/userflow/v1/clients/login': loginClient,
        '/userflow/v1/clients/{id}': clientById
    },
    components: {
        schemas: {
            UserRegistration,
            UserLogin,
            Client,
            ClientInput,
            ClientUpdateInput,
            ClientLogin
        },
        securitySchemes: {
            bearerAuth,
            apiKeyAuth
        }
    }
};

export default swaggerSpec;

