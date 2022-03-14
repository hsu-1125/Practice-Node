import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import config from './config.js'
import errorFactory from '../errors/errorFactory.js'
import * as ErrorConst from '../errors/constants.js'

const algor = 'sha512'
const expiresTime = 60 * 60 * 2

export function encrypt(password) {
  const salt = crypto.randomBytes(32).toString('hex')
  return {
    password: crypto.pbkdf2Sync(password, salt, 100000, 64, algor).toString('hex'),
    password_salt: salt
  }
}

export function verifyPassword(password, user) {
  if (user.password !== crypto.pbkdf2Sync(password, user.password_salt, 100000, 64, algor).toString('hex')) {
    throw errorFactory(ErrorConst.USERNOTEXIST)
  }
}

export function createToken(data) {
  return jwt.sign(data, config.privateKey, { expiresIn: expiresTime })
}

