import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item.model'

const getCars = async () => {
    return await ItemModel.find()
}
const getCar = async (id: string) => {
    return await ItemModel.findOne({ _id: id })
}
const insertCar = async (item: Car) => {
    return await ItemModel.create(item)
}
const updateCar = async (id: string, data: Car) => {
    return await ItemModel.findOneAndUpdate({_id:id}, data, {new:true})
}
const deleteCar = async (id: string) => {
    return await ItemModel.remove({_id:id})
}
export { getCars, insertCar, getCar, updateCar, deleteCar }
