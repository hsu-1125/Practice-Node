import jwt from 'jsonwebtoken'
import config from '../lib/config.js'
import * as errorType from '../errors/constants.js'
import errorFactory from '../errors/errorFactory.js'

export const verify = (req, res, next) => {
  let token = req.headers.authorization || req.cookies.token
  if (!token) throw errorFactory(errorType.NOTLOGIN)

  token = token.replace('Bearer ', '')

  jwt.verify(token, config.privateKey, (err, decoded) => {
    if (err) throw errorFactory(errorType.TOKENEXPIRED)

    req.user = decoded
    return next()
  })
}