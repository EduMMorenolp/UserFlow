const register = {
    post: {
        summary: "Registrar un nuevo usuario",
        tags: ["Users"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UserRegistration"
                    }
                }
            }
        },
        responses: {
            201: {
                description: "Usuario registrado exitosamente",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string"
                                },
                                apiKey: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            },
            400: {
                description: "Datos de entrada inválidos"
            },
            500: {
                description: "Error del servidor"
            }
        }
    }
};

export default register;