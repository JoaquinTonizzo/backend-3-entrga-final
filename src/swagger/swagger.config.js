import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

// Importar documentación de endpoints
import './users.swagger.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Adopción de Mascotas',
      version: '1.0.0',
      description: 'API REST para gestión de adopción de mascotas. Documentación de endpoints disponibles.'
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Servidor de desarrollo'
      },
      {
        url: 'http://localhost:3000',
        description: 'Servidor alternativo'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/swagger/**/*.js']
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUiExpress };
