import express from 'express'
import * as auth from '../middleware/auth.js'

const router = express.Router()

import * as authController from '../controllers/auth.js'
import * as bookController from '../controllers/book.js'

router.post('/signUp', authController.signUp)
router.post('/login', authController.login)

router.get('/book', auth.verify, bookController.getBookList)
router.get('/book/:id', auth.verify, bookController.getBook)
router.post('/book', auth.verify, bookController.createBook)
router.put('/book/:id', auth.verify, bookController.updateBook)
router.delete('/book/:id', auth.verify, bookController.deleteBook)

export default router