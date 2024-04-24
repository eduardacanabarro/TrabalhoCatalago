const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Catálogo de Plantas API',
            version: '1.0.0',
            description: 'Documentação da API para o Catálogo de Plantas',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Coloque a URL base da sua API aqui
                description: 'Servidor local',
            },
        ],
    },
    apis: ['./routes/*.js'], // Coloque o caminho dos arquivos das suas rotas aqui
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
