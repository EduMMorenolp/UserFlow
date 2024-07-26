// swagger/components/schemas/Client.js

const Client = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        email: {
            type: 'string',
            format: 'email'
        },
        adminId: {
            type: 'string'
        }
    }
};

export default Client;
