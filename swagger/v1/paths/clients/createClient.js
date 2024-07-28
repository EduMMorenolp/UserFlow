const createClient = {
    post: {
        summary: "Registro de nuevo cliente",
        tags: ["Clients"],
        security: [
            { apiKeyAuth: [] }
        ],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ClientInput"
                    }
                }
            }
        },
        responses: {
            201: {
                description: "Cliente registrado exitosamente",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Client"
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

export default createClient;