const deleteUser = {
    delete: {
        summary: "Eliminar el Usuario por ID",
        tags: ["Users"],
        security: [{ bearerAuth: [] }],
        parameters: [
            {
                in: "path",
                name: "id",
                required: true,
                schema: {
                    type: "String"
                },
                description: "ID del usuario"
            }
        ],
        responses: {
            200: {
                description: "Usuario eliminado exitosamente"
            },
            500: {
                description: "Error del servidor"
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    }
};

export default deleteUser;