const loginClient = {
    post: {
        summary: "Login de cliente",
        tags: ["Clients"],
        security: [
            { apiKeyAuth: [] }
        ],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ClientLogin"
                    }
                }
            }
        },
        responses: {
            201: {
                description: "Inicio de Cliente exitoso",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Inicio de sesión exitoso"
                                },
                                client: {
                                    $ref: "#/components/schemas/Client"
                                }
                            }
                        }
                    }
                }
            },
            500: {
                description: "Error del servidor"
            }
        }
    }
};

export default loginClient;