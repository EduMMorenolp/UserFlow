const UserRegistration = {
    type: "object",
    required: ["id", "name", "lastName", "email", "password"],
    properties: {
        id: {
            type: "String"
        },
        name: {
            type: "string"
        },
        lastName: {
            type: "string"
        },
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

export default UserRegistration;