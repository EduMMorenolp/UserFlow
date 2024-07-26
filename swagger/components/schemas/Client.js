// swagger/components/schemas/Client.js

const Client = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
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
            type: 'integer'
        }
    }
};

export default Client;
