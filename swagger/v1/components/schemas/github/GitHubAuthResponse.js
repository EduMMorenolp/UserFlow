// swagger/v1/components/schemas/github/GitHubAuthResponse.js
export default {
    type: 'object',
    properties: {
        user: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                name: { type: 'string' }
            }
        },
        token: {
            type: 'string',
            description: 'JWT token for authenticated user'
        }
    }
};
