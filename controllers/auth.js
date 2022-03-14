import ioc from '../lib/IOC.js'
import * as SERVICETYPE from '../ioc/constants.js'
import response from '../lib/response.js'

// reference /services/drink.service.js apis
const service = ioc.use(SERVICETYPE.AUTH)

export const signUp = async (req, res, next) => {
    // #swagger.tags = ['Drink']
    try {
        let { name, email, password } = req.body

        result = await service.signUp(name, email, password)

        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}

export const login = async (req, res, next) => {
    // #swagger.tags = ['Drink']
    try {
        let { email, password } = req.body

        const result = await service.login(email, password)

        res.status(200).json(response.return(result))
    } catch (e) {
        next(e)
    }
}
