import { Request, Response } from 'express'
import { RequestExt } from '../interfaces/req.interface'
import { getOrders } from '../services/order'
import { handleHttp } from '../utils/error.handle'

const getItems = async (req: RequestExt, res: Response) => {
    try {
        const items = await getOrders()
        res.send({data:items, user:req.user})
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

export { getItems }