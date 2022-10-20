import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const getOrders = async () => {
    return await ItemModel.find()
}

export {getOrders}