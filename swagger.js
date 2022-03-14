import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    version: '1.0.0',
    title: 'Practice Node.js'
  },
  servers: [
    {
      url: 'https://api.bluenet-ride.com',
      description: 'Production'
    },
    {
      url: 'https://api-dev.bluenet-ride.com',
      description: 'Staging'
    }
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be "header", "query" or "cookie"
      name: 'authorization', // name of the header, query parameter or cookie
      description: 'any description...'
    }
  },
  consumes: ["application/json"],
  produces: ["application/json"],
  definitions: {}
}


const outputFile = './swagger-output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(async () => {
  await import('./server.js') // Your project's root file
})
