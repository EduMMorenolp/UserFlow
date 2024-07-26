const regenerateApiKey = {
    post: {
        summary: "Regenerar API Key del usuario",
        tags: ["Users"],
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            200: {
                description: "API Key regenerada exitosamente",
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
            500: {
                description: "Error del servidor"
            }
        }
    }
};

export default regenerateApiKey;