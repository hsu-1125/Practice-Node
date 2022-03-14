import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json'

// init
import './models/db.js'
import './ioc/index.js'

import indexRouter from './routes/index.js'
import errorHandler from './middleware/errorHandler.js'
import config from './lib/config.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: '100MB' }))
app.use(express.urlencoded({
  parameterLimit: 100000,
  extended: false,
  limit: '100MB'
}))
app.use(cookieParser())

if (config.env !== 'production') {
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile, { swaggerOptions: { operationsSorter: 'method' } }))
}

// API
app.use('/v1', indexRouter)

app.use(errorHandler)


export default app