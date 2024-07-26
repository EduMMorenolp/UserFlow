const clientById = {
    get: {
        summary: "Obtener un cliente por ID",
        tags: ["Clients"],
        security: [{ bearerAuth: [] }],
        parameters: [
            {
                in: "path",
                name: "id",
                required: true,
                schema: {
                    type: "integer"
                },
                description: "ID del cliente"
            }
        ],
        responses: {
            200: {
                description: "Cliente obtenido exitosamente",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Client"
                        }
                    }
                }
            },
            404: {
                description: "Cliente no encontrado"
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
    },
    put: {
        summary: "Actualizar un cliente por ID",
        tags: ["Clients"],
        security: [{ bearerAuth: [] }],
        parameters: [
            {
                in: "path",
                name: "id",
                required: true,
                schema: {
                    type: "integer"
                },
                description: "ID del cliente"
            }
        ],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ClientUpdateInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Cliente actualizado exitosamente",
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
        },
        security: [
            {
                apiKeyAuth: []
            }
        ]
    },
    delete: {
        summary: "Eliminar un cliente por ID",
        tags: ["Clients"],
        security: [{ bearerAuth: [] }],
        parameters: [
            {
                in: "path",
                name: "id",
                required: true,
                schema: {
                    type: "integer"
                },
                description: "ID del cliente"
            }
        ],
        responses: {
            200: {
                description: "Cliente eliminado exitosamente"
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

export default clientById;