// swagger/components/schemas/Client.js

const Client = {
    type: 'object',
    properties: {
        id: {
            type: 'String'
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
            type: 'String'
        }
    }
};

export default Client;
