import moment from 'moment-timezone'
import ioc from '../lib/IOC.js'
import * as SERVICETYPE from '../ioc/constants.js'
import response from '../lib/response.js'

// reference /services/drink.service.js apis
const services = ioc.use(SERVICETYPE.BOOK)

export const getBookList = async (req, res, next) => {
    // #swagger.tags = ['Book']
    try {
        const { title } = req.query
        const result = await services.getBookList(title)
        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}

export const getBook = async (req, res, next) => {
    // #swagger.tags = ['Book']
    try {
        const { id } = req.params

        const result = await services.getBook(id)
        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}

export const createBook = async (req, res, next) => {
    // #swagger.tags = ['Book']
    try {
        const book = req.body

        const result = await services.createBook(book)
        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}

export const updateBook = async (req, res, next) => {
    // #swagger.tags = ['Book']
    try {
        let { id } = req.params
        const book = req.body

        const result = await services.updateBook(id, book)
        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}

export const deleteBook = async (req, res, next) => {
    // #swagger.tags = ['Book']
    try {
        let { id } = req.params

        const result = await services.deleteBook(id)
        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}