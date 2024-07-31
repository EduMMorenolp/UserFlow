const UserRegistration = {
    type: "object",
    required: ["name", "lastName", "email", "password"],
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
        },
        password: {
            type: "string",
            format: "password"
        }
    }
};

export default UserRegistration;