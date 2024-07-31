const ClientLogin = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: {
            type: "string",
            format: "email"
        },
        password: {
            type: "string",
            format: "password"
        }
    }
};

export default ClientLogin;