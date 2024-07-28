const login = {
    post: {
        summary: "Iniciar sesión de usuario",
        tags: ["Users"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UserLogin"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Inicio de sesión exitoso",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Inicio de sesión exitoso"
                                },
                                id: {
                                    type: "string",
                                    example: "5f9f1b9b9c1d2e3f4a5b6c7d"
                                },
                                token: {
                                    type: "string",
                                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                                },
                                apiKey: {
                                    type: "string",
                                    example: "1234567890abcdef"
                                }
                            }
                        }
                    }
                }
            },
            401: {
                description: "Credenciales inválidas"
            },
            404: {
                description: "Usuario no encontrado"
            },
            500: {
                description: "Error del servidor"
            }
        }
    }
};

export default login;