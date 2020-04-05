exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Fastify, Node,js, MongoDB, Swagger API',
        description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      //host: 'localhost:'+ process.env.PORT||3000,
      schemes: ['http','https'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  }