import { Request, Response } from 'express'
import { insertCar, getCars, getCar, updateCar, deleteCar } from '../services/item'
import { handleHttp } from '../utils/error.handle'

const getItem = async (req: Request, res: Response) => {
    try {
        const item = await getCar(req.params.id)
        res.send(item ? item : 'NOT_FOUND')
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const items = await getCars()
        res.send(items)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

export { getItem, getItems }