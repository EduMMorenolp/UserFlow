// swagger/swaggerSpec.js

import info from './info.js';
import servers from './servers.js';
import register from './paths/users/registerUser.js';
import login from './paths/users/loginUser.js';
import regenerateApiKey from './paths/users/regenerateApiKeyUser.js';
import getAllClients from './paths/clients/getAllClients.js';
import createClient from './paths/clients/createClient.js';
import clientById from './paths/clients/clientById.js';
import UserRegistration from './components/schemas/user/UserRegistration.js';
import UserLogin from './components/schemas/user/UserLogin.js';
import Client from './components/schemas/client/Client.js';
import ClientInput from './components/schemas/client/ClientInput.js';
import ClientUpdateInput from './components/schemas/client/ClientUpdateInput.js';
import bearerAuth from './components/securitySchemes/bearerAuth.js';
import apiKeyAuth from './components/securitySchemes/apiKeyAuth.js';
import deleteUser from './paths/users/deleteUser.js';
import loginClient from './paths/clients/loginClient.js';
import ClientLogin from './components/schemas/client/ClientLogin.js';

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        '/users/register': register,
        '/users/login': login,
        '/users/regenerate-api-key': regenerateApiKey,
        '/users/deleteUser': deleteUser,
        '/clients': {
            ...getAllClients
        },
        '/clients/register': createClient,
        '/clients/login': loginClient,
        '/clients/{id}': clientById
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

