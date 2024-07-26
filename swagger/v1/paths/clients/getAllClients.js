const getAllClients = {
    get: {
        summary: "Obtener todos los clientes",
        tags: ["Clients"],
        responses: {
            200: {
                description: "Lista de clientes obtenida exitosamente",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/Client"
                            }
                        }
                    }
                }
            },
            500: {
                description: "Error del servidor"
            }
        },
        security: [
            {
                apiKeyAuth: []
            }
        ]
    }
};

export default getAllClients;