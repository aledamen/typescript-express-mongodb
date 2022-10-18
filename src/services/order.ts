import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const getOrder = async () => {
    return await ItemModel.find()
}

export {getOrder}