// swagger/v1/paths/github/auth.js
export default {
    get: {
        tags: ['GitHub Authentication'],
        summary: 'Autentificación con GitHub',
        description: 'Inicia la autenticación con GitHub para obtener permisos de acceso',
        security: [{ apiKeyAuth: [] }],
        responses: {
            '302': {
                description: 'Redirects to GitHub for authentication'
            }
        }
    }
};