import { Schema, Types, model, Model } from 'mongoose'
import { User } from '../interfaces/user.interface'


const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            require:true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require:true
        },
        description: {
            type: String,
            default: 'Description here'
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UserModel = model('user', UserSchema)
export default UserModel
