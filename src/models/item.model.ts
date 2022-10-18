import { Schema, Types, model, Model } from 'mongoose'
import { Car } from '../interfaces/car.interface'

const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            require:true
        },
        color: {
            type: String,
            require:true
        },
        gas: {
            type: String,
            enume: ['gasoline', 'electric'],
            require:true
        },
        year: {
            type: Number,
            require:true
        },
        description: {
            type: String,
            require:true
        },
        price: {
            type: Number,
            require:true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ItemModel = model('item', ItemSchema)
export default ItemModel
