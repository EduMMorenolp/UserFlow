// swagger/v1/paths/github/authCallback.js
export default {
    get: {
        tags: ['GitHub Authentication'],
        summary: 'GitHub Authentication Callback',
        description: 'Maneja la devolución de llamada de GitHub después de la autenticación.',
        security: [{ apiKeyAuth: [] }],
        parameters: [
            {
                name: 'code',
                in: 'query',
                required: true,
                schema: {
                    type: 'string',
                    description: 'Código de autorización devuelto por GitHub'
                }
            }
        ],
        responses: {
            '200': {
                description: 'Autenticación exitosa'
            }
        }
    }
}