import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const getCars = async () => {
    return await ItemModel.find()
}
const getCar = async (id:string) => {
    return await ItemModel.findOne({_id:id})
}
const insertCar = async (item: Car) => {
    return await ItemModel.create(item)
}

export { getCars, insertCar, getCar }
