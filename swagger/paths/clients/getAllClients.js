const getAllClients = {
    get: {
        summary: "Obtener todos los clientes",
        tags: ["Clients"],
        security: [{ bearerAuth: [] }],
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
        }
    }
};

export default getAllClients;