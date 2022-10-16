import { Schema, Types, model, Model } from 'mongoose'

const ItemSchema = new Schema(
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
