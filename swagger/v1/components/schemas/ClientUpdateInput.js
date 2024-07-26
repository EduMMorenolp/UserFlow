const ClientUpdateInput = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        lastName: {
            type: "string"
        },
        email: {
            type: "string",
            format: "email"
        }
    }
};

export default ClientUpdateInput;
