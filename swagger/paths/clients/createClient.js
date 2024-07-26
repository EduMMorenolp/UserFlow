const createClient = {
    post: {
        summary: "Crear un nuevo cliente",
        tags: ["Clients"],
        security: [
            { bearerAuth: [] },
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
                description: "Cliente creado exitosamente",
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