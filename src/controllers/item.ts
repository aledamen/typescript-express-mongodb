import { Request, Response } from 'express'
import { insertCar, getCars, getCar } from '../services/item'
import { handleHttp } from '../utils/error.handle'

const getItem = async (req: Request, res: Response) => {
    try {
        const item = await getCar(req.params.id)
        res.send(item)
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
const updateItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}
const postItem = async (req: Request, res: Response) => {
    try {
        const item = await insertCar(req.body)
        res.send(item)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
