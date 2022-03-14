import user from '../models/user.js'
import book from '../models/book.js'
import authService from '../services/auth.js'
import bookService from '../services/book.js'
import * as Types from './constants.js'

// inject db instance to service
export default function Register(ioc) {
  ioc.bind(Types.AUTH, () => new authService(user))
  ioc.bind(Types.BOOK, () => new bookService(book))
}